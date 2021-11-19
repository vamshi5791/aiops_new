var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var fs = require('fs');
var fetch = require("node-fetch");
var offlineToken = properties.get('main.QA_Offline_Token');;
var HttpEndPointUrl = properties.get('main.QA_HTTP_End_Point');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var token_URL = properties.get("main." + globalThis.environment + "_token_URL");
var alertMapping_url = properties.get("main." + globalThis.environment + "_alertMapping");
var Offline_Token = properties.get("main." + globalThis.environment + "_Offline_Token");
var IHubComponent = properties.get("main." + globalThis.environment + "_IHubComponent");
var USER_CustomReassignment = properties.get("main." + globalThis.environment + "_USER_CustomReassignment");
var TemplateId;
var accessToken;
var resolutions;
var objectString;
var emptyString = '{}';
var AccessTokenBodyValue = properties.get("main." + globalThis.environment + "_AccessTokenBody");
var RecommendationResolution = properties.get('main.' + globalThis.environment + '_RecommendationResolutions');
var customFieldIndexBody;
export class ITOPS_APIs {
    async HTTPchannelAlerts(nodeName: string = "", AlertSeverity: string = "Information", channelJson: string) {
        var HttpAlertJson = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8'));
        var getHttpAlert = HttpAlertJson[channelJson];
        getHttpAlert['Node Name'] = nodeName;
        getHttpAlert['Alert Severity'] = AlertSeverity;

        var body_HttpAlert = JSON.stringify(getHttpAlert)
        var IHubComponent_url = IHubComponent + '/api/smartops/ihub/endpoint';
        await fetch(IHubComponent_url, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-key": 1,
                "offline-token": Offline_Token,
            },
            body: body_HttpAlert
        }).then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }
    //get Access Token

    async getAccessToken() {
        await fetch(token_URL, {
            method: 'POST',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            body: AccessTokenBodyValue,
        }).then(response => response.json())
            .then(resp => {
                accessToken = resp.access_token;
            })
        return accessToken;
    }
    //Get All Templates of a Project
    async getAllTemplates(ProjectId) {
        const accessToken = await this.getAccessToken();
        var getAllTemplates_url = alertMapping_url + '/api/ticketTemplates/' + ProjectId;
        await fetch(getAllTemplates_url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
            }
        }).then(async response => {
            try {
                const data = await response.json()
                for (let index = 0; index < data.templates.length; index++) {
                    if (data.templates[index].templateName === 'CustomReassignmentTemplate')
                        TemplateId = data.templates[index].templateId
                }
                console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
        return TemplateId
    }
    //Delete any Template USing TemplateId
    async deleteTemplate(TemplateId: string) {
        const accessToken = await this.getAccessToken();
        var deleteTemplate_url = alertMapping_url + '/api/deleteTemplate';
        await fetch(deleteTemplate_url, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
            },
            body: '{ "templateIds": [ "' + TemplateId + '" ] }'
        }).then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }
    //for creating template
    async CustomReassignmentTemplate(projectId, templateName: string) {
        var TemplateJson = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8'));
        var getJsonTemplate = TemplateJson['CustomReassignmentTemplate'];
        getJsonTemplate['projectId'] = projectId;
        getJsonTemplate['templateName'] = templateName;
        var body_CustomReassignmentTemplate = JSON.stringify(getJsonTemplate)
        const accessToken = await this.getAccessToken();
        var CustomReassignmentTemplate_Url = alertMapping_url + '/api/ticketTemplate';
        await fetch(CustomReassignmentTemplate_Url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
                "user": USER_CustomReassignment,
            },
            body: body_CustomReassignmentTemplate
        }).then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }

    //Update Default Template with assignment_group_id
    async updateDefaultTemplate(assignment_group_id: string = 'ee199611db12e4104d2e62cb139619ee', ProjectId: string = '1677') {
        const accessToken = await this.getAccessToken();
        var bodyTemplate = await this.getAllTemplates(ProjectId)
        var assignment_group = bodyTemplate.templateDefault.templateMapping[1].values[0];
        assignment_group.fieldValue = assignment_group_id;
        bodyTemplate = JSON.stringify(bodyTemplate.templateDefault)
        const updateTemplateDfu = alertMapping_url + '/api/updateTicketTemplate';
        await fetch(updateTemplateDfu, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
                "user": USER_CustomReassignment
            },
            body: bodyTemplate,
        }).then(async response => {
            try {
                const data = await response.json()
                //console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })

    }

    //new field to index

    async customFieldIndex(indexName: string, property: string, label: string) {
        const accessToken = await this.getAccessToken();
        customFieldIndexBody = { "indexName": indexName, "property": property, "label": label, "type": "keyword" };
        customFieldIndexBody = JSON.stringify(customFieldIndexBody);
        var customFieldIndex_url = alertMapping_url + '/api/addFieldToIndex';
        await fetch(customFieldIndex_url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
                "user": "smartops"
            },
            body: customFieldIndexBody,
        }).then(async response => {
            try {
                const data = await response.json()
                //console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }
    async RecommenededResolution(projectId: string, ticketNumber: string) {
        const accessToken = await this.getAccessToken();
        var RecommendationResolution_url = RecommendationResolution + '/api/getRecommendations';
        let body = {
            "output": [
                "similar_tickets",
                "resolutions"
            ],
            "category": "Skype for Business",
            "projectId": projectId,
            "shortDescription": "[solarwinds] Restore the deleted article in system",
            "ticketNumber": ticketNumber
        }
        let body_String = JSON.stringify(body)
        await fetch(RecommendationResolution_url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
            },
            body: body_String
        }).then(response => response.json())
            .then(resp => {
                objectString = JSON.parse(emptyString);
                for (let index = 0; index < resp.resolutions.length; index++) {
                    objectString['ticket_id' + index] = resp.resolutions[index].ticket_id;
                    objectString['resolution' + index] = resp.resolutions[index].resolution;
                    objectString['resolution_quality' + index] = resp.resolutions[index].resolution_quality;
                }
                resolutions = objectString;
            })
        return resolutions
    }
}