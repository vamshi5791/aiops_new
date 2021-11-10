var fetch = require("node-fetch");
var base64 = require('base-64');

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var KibanaAPI_URL = properties.get("main." + globalThis.environment + "_KibanaAPI_URL");
var Kibana_UserID = properties.get("main." + globalThis.environment + "_Kibana_UserID");
var Kibana_Password = properties.get("main." + globalThis.environment + "_Kibana_Password");
var alertsResponse;
var firstTicketNumber;
var assignedGroup1;
export class ApiKibana {



    // Getting username, userID, groupname, groupID from Ticket Store

    async getTicketStore(projectID:string, TicketNumber:string) {
        const urlOpenTickets = KibanaAPI_URL + '?path=tickets_' + projectID + '_1/_search?size=5000&method=POST'
        await fetch(urlOpenTickets, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
                "kbn-xsrf": true
            },
            body: '{"sort": [ {"createdTime": {"order": "desc" } } ]}'
        }).then(response => response.json())
            .then(resp => {
                let respJson = resp.hits.hits;
                for (let index = 0; index < resp.hits.total; index++) {
                    if (respJson[index]._source.ticketNumber === TicketNumber) {
                        alertsResponse = respJson[index]._source;
                    }
                }
            })
        return alertsResponse;
    }

    // Getting username, userID, groupname, groupID from Alert Store

    async getAlertStore(projectID:string, TicketNumber:string) {

        const urlOpenTickets = KibanaAPI_URL + '?path=alerts_' + projectID + '_1/_search?size=5000&method=POST'
        await fetch(urlOpenTickets, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
                "kbn-xsrf": true
            },
            body: '{"sort": [ {"createdTime": {"order": "desc" } } ]}'
        }).then(response => response.json())
            .then(resp => {
                let respJson = resp.hits.hits;
                for (let index = 0; index < resp.hits.total; index++) {
                    if (respJson[index]._source.ticketNumber === TicketNumber) {
                        // console.log(respJson[1]._source)
                        alertsResponse = respJson[index]._source;
                    }
                }
            })
        return alertsResponse;
    }
 //Getting all tickets from ticket store assigned to MyGroup sorted with updatedTime and check in UI it matches
 async getAllTicketStoreDataMyGroupSorted(projectID:string, MyGroupName:string) {

    const urlOpenTickets = KibanaAPI_URL + '?path=tickets_' + projectID + '_1/_search?size=5000&method=POST'
    await fetch(urlOpenTickets, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
            "kbn-xsrf": true
        },
        body: '{"_source":["ticketNumber","assignedTo","assignedGroup","itopsTicketStateInfo.ticketState"],"size":999999,"from":0,"sort":[{"updatedTime":{"order": "desc"}}],"query":{"match": {"assignedGroup":"' + MyGroupName + '"}}}'
    }).then(response => response.json())
        .then(resp => {
            let respJson = resp.hits.hits;
            firstTicketNumber = respJson[0]._source.ticketNumber;
        })
    return firstTicketNumber;
}
//Getting all tickets from ticket store sorted with updatedTime desc and check in UI it matches
async getAllTicketStoreDataSorted(projectID:string) {

    const urlOpenTickets = KibanaAPI_URL + '?path=tickets_' + projectID + '_1/_search?size=5000&method=POST'
    await fetch(urlOpenTickets, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
            "kbn-xsrf": true
        },
        body: '{"_source":["ticketNumber","assignedTo","assignedGroup","itopsTicketStateInfo.ticketState"],"size":999999,"from":0,"sort":[{"updatedTime":{"order": "desc"}}]}'
    }).then(response => response.json())
        .then(resp => {
            let respJson = resp.hits.hits;
            firstTicketNumber = respJson[0]._source.ticketNumber
        })
    return firstTicketNumber;
}
 //Get Assigned Groups for a project from Ticketstore.
 async getAssignedGroups(projectID:string) {

    const urlOpenTickets = KibanaAPI_URL + '?path=tickets_' + projectID + '_1/_search?size=5000&method=POST'
    await fetch(urlOpenTickets, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
            "kbn-xsrf": true
        },
        body: '{"size":0,"aggs":{"assignedGroup":{"terms":{"field":"assignedGroup", "size": 10000}}}}'
    }).then(response => response.json())
        .then(resp => {
            let respJson = resp.aggregations.assignedGroup.buckets;
            assignedGroup1 = respJson[0].key;
        })
    return assignedGroup1;
}  
// // Getting username, userID, groupname, groupID from Ticket Store

    // async getTicketStore(projectID, ticketNumber) {
    //     const urlOpenTickets = KibanaAPI_URL + '?path=tickets_' + projectID + '_1/_search?size=5000&method=POST'
    //     await fetch(urlOpenTickets, {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json;charset=UTF-8",
    //             "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
    //             "kbn-xsrf": true
    //         },
    //         body: '{"sort": [ {"createdTime": {"order": "desc" } } ]}'
    //     }).then(response => response.json())
    //         .then(resp => {
    //             let respJson = resp.hits.hits;

    //             for (let index = 0; index < resp.hits.total; index++) {
    //                 if (respJson[index]._source.ticketNumber === ticketNumber) {
    //                     alertsResponse = respJson[0]._source;
    //                 }
    //                 return false;
    //             }
    //         })
    //     return alertsResponse;
    // }

    // // Getting username, userID, groupname, groupID from Alert Store

    // async getAlertStore(projectID, ticketNumber) {

    //     const urlOpenTickets = KibanaAPI_URL + '?path=alerts_' + projectID + '_1/_search?size=5000&method=POST'
    //     await fetch(urlOpenTickets, {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json;charset=UTF-8",
    //             "Authorization": `Basic ${base64.encode(`${Kibana_UserID}:${Kibana_Password}`)}`,
    //             "kbn-xsrf": true
    //         },
    //         body: '{"sort": [ {"createdTime": {"order": "desc" } } ]}'
    //     }).then(response => response.json())
    //         .then(resp => {
    //             let respJson = resp.hits.hits;

    //             for (let index = 0; index < resp.hits.total; index++) {
    //                 if (respJson[index]._source.ticketNumber === ticketNumber) {
    //                     alertsResponse = respJson[0]._source;
    //                 }
    //                 return false;
    //             }
    //         })
    //     return alertsResponse;
    // }
}