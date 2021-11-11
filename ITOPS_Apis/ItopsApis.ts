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

var TemplateId;
var accessToken;
var QA_AccessTokenBody;
export class ITOPS_APIs {
    async HTTPchannelAlerts(nodeName: string = "", AlertSeverity: string = "Information",channelJson:string) {
        var HttpAlertJson = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8'));
        var getHttpAlert = HttpAlertJson[channelJson];
        getHttpAlert['Node Name'] = nodeName;
        getHttpAlert['Alert Severity'] = AlertSeverity;

        var body_HttpAlert = JSON.stringify(getHttpAlert)
        await fetch('https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/ihubcomponent/api/smartops/ihub/endpoint', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-key": 1,
                "offline-token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhODdjYzgwOS02YTA1LTQyY2MtOTY3YS0zNjk3OGFjZGFkZTUifQ.eyJqdGkiOiI0YTU5MmY1Ni0zMDY2LTQ5N2EtOWVkYi05YTQwNDI1YzRjN2YiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNjMyMTQ0NTA1LCJpc3MiOiJodHRwczovL3NtYXJ0b3BzLXFhMDEuZWFzdHVzLmNsb3VkYXBwLmF6dXJlLmNvbS9wYWFzL2l0b3BzL2tleWNsb2FrL2F1dGgvcmVhbG1zL3VzdGdsb2JhbCIsImF1ZCI6Imh0dHBzOi8vc21hcnRvcHMtcWEwMS5lYXN0dXMuY2xvdWRhcHAuYXp1cmUuY29tL3BhYXMvaXRvcHMva2V5Y2xvYWsvYXV0aC9yZWFsbXMvdXN0Z2xvYmFsIiwic3ViIjoiYjdiYTUxZWUtOTMxZi00NzA4LTgzYjYtZmRkYTA3ODk1MDQxIiwidHlwIjoiT2ZmbGluZSIsImF6cCI6InNtYXJ0b3BzLWZyb250ZW5kIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYWVhNWRiM2EtMzY5My00NTU0LTliNjEtNzFiMGE1YzVkZDFhIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInN5c3RlbV9mbG93X2V4ZWN1dG9yIiwib2ZmbGluZV9hY2Nlc3MiXX0sInJlc291cmNlX2FjY2VzcyI6eyJzbWFydG9wcy1mcm9udGVuZCI6eyJyb2xlcyI6WyJpbnZva2Utc3lzdGVtLWZsb3ciXX19LCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIn0.EtD0x9DEAD1UzsdPJx1IS3UV8JTtIOckCiU5mvtMEyA",
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
            body: QA_AccessTokenBody,
        }).then(response => response.json())
            .then(resp => {
                accessToken = resp.access_token;
            })
        return accessToken;
    }
    //Get All Templates of a Project
    async getAllTemplates() {
        const accessToken = await this.getAccessToken();
        await fetch('https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/alertmapping/api/ticketTemplates/1519', {
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
        await fetch(' https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/alertmapping/api/deleteTemplate', {
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
        await fetch('https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/alertmapping/api/ticketTemplate', {
            method: 'PUT',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
                "user": "u60967@ust-global.com"
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

}