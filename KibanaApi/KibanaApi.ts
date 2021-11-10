var fetch = require("node-fetch");
var base64 = require('base-64');

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var KibanaAPI_URL = properties.get("main." + globalThis.environment + "_KibanaAPI_URL");
var Kibana_UserID = properties.get("main." + globalThis.environment + "_Kibana_UserID");
var Kibana_Password = properties.get("main." + globalThis.environment + "_Kibana_Password");
var alertsResponse;

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