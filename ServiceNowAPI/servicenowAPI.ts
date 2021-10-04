var fetch = require("node-fetch");
var arr_state = { "1": "New", "2": "Active", "3": "Awaiting Problem", "8": "Awaiting Change", "4": "Awaiting User Info", "5": "Awaiting Customer IT", "6": "Resolved", "11": "Awaiting Vendor", "12": "On Hold" };
var emptyString = '{}';
var objectString;
var customJson;

var state_value = { "New": "1", "Active": "2", "Awaiting Problem": "3", "Awaiting Change": "8", "Awaiting User Info": "4", "Awaiting Customer IT": "5", "Resolved": "6", "Awaiting Vendor": "11", "On Hold": "12" }
var base64 = require('base-64');

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var ServiceNowURL = properties.get("main." + globalThis.environment + "_serviceNow_URL")
var ServiceNowUserName = properties.get("main." + globalThis.environment + "_serviceNow_UserId")
var ServiceNowPassword = properties.get("main." + globalThis.environment + "_serviceNow_User_Password")

var new_inc_number;
export class ServiceNowAPI {

    async apiServiceNow(incNumber) {
        const mainService_url = ServiceNowURL + '/incident.do?JSONv2&sysparm_action=getRecords&sysparm_query=number=' + incNumber;

        await fetch(mainService_url, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        })
            // Converting to JSON
            .then(response => response.json())
            // Displaying results to console
            .then(result => {

                let ResultJSON = result.records[0]
                objectString = JSON.parse(emptyString);
                objectString.short_description = ResultJSON.short_description;
                objectString.state = arr_state[ResultJSON.state];
                objectString.sys_id = ResultJSON.sys_id;
                objectString.assignment_group_id = ResultJSON.assignment_group;
                objectString.assigned_to_id = ResultJSON.assigned_to;
                objectString.close_notes = ResultJSON.close_notes;
                customJson = objectString;
            });
        return customJson;
    }

    async updateIncServiceNow(sys_id: string, State: string) {
        var bodyString = JSON.parse(emptyString);
        bodyString.incident_state = state_value[State];
        const data_body = JSON.stringify(bodyString);
        let this_url = ServiceNowURL + '/api/now/v1/table/incident/' + sys_id + "?sysparm_exclude_ref_link=true"
        await fetch(this_url, {
            method: "PUT",
            body: data_body,
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        }).then(response => response.json())
            .then(resp => {
            })
            .catch(error => {
                console.log(error);
            });
    }
    async updateTicketToResolved(sys_id: string, State: string, category: string, subCategory: string, closeCode: string, closeNote: string) {
        var bodyString = JSON.parse(emptyString);
        bodyString.incident_state = state_value[State];
        bodyString.category =  category;
        bodyString.subcategory = subCategory;
        bodyString.close_code = closeCode;
        bodyString.close_notes = closeNote;
        const data_body = JSON.stringify(bodyString);
        let this_url = ServiceNowURL + '/api/now/v1/table/incident/' + sys_id + "?sysparm_exclude_ref_link=true"
        await fetch(this_url, {
            method: "PUT",
            body: data_body,
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        }).then(response => response.json())
            .then(resp => {
            })
            .catch(error => {
                console.log(error);
            });
    }
 
    async createNewInc() {
        const main_url = ServiceNowURL + '/api/now/v1/table/incident';
        await fetch(main_url, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        }).then(response => response.json())
            .then(resp => {
                new_inc_number = resp.result.number
            });
        return new_inc_number;
    }
    // For Assignment Group Get Method 
    async assignmentGroup(assGroupId: string) {
        const m_url = ServiceNowURL + '/api/now/v1/table/sys_user_group/' + assGroupId;
        await fetch(m_url, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        })
            .then(response => response.json())
            .then(resp => {
                objectString.assignment_group_name = resp.result.name;
            });
    }

    //For Assigned To Get Method

    async assignedTo(assignToId: string) {
        const asgTo_url = ServiceNowURL + '/api/now/v1/table/sys_user/' + assignToId;
        await fetch(asgTo_url, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${ServiceNowUserName}:${ServiceNowPassword}`)}`
            }
        })
            .then(response => response.json())
            .then(resp => {
                objectString.assigned_to = resp.result.name;
            })

    }
}
