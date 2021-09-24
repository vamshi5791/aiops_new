
var fs = require('fs');
var fetch = require("node-fetch");
var sss;

let baseApiUrl = "https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/rabbitmq/api"
let projectName;

const request = require('request');

export class ApiRabbitMQ {

    // Get method for Project Name  in RabbitMQ
    async apiPushMsgRabbitMQ(project: string, routeKey: string, channelJson: string) {
        const options = {
            method: 'GET',
            url: baseApiUrl + '/exchanges?page=1&name=' + project + '&pagination=true',
            headers: {
                authorization: 'Basic YWRtaW46ajVjNnltNm5GbThNMllpYQ=='
            },
            json: true
        };

        await request(options, (error, response, body) => {
            if (error) throw new Error(error)
            let Jsondata = body;
            projectName = Jsondata.items[0].name;

            console.log(projectName)
            console.log(error)
            this.RabbitMQPushMsg(routeKey, channelJson)
        })
    }

    //POST Method for Push Messages Through RabbitMQ Api
    async RabbitMQPushMsg(routeKey: string, channelJson: string) {


        let mainApiUrl = baseApiUrl + '/exchanges/ihub/' + projectName + '/publish';

        let project_id = projectName.split('.', 2);

        let routingKey = project_id[0] + '.' + project_id[1] + '.' + routeKey + '.queue';
        console.log(routingKey)

        let JsonAlert = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8'));
        let info = JsonAlert[channelJson];
        let StringifiedJsonAlert = JSON.stringify(info);
        console.log(StringifiedJsonAlert)
        const options = {
            method: 'POST',
            url: mainApiUrl,
            headers: {
                'content-type': 'application/json',
                authorization: 'Basic YWRtaW46ajVjNnltNm5GbThNMllpYQ=='
            },
            body: {
                "properties": { "delivery_mode": 1, "headers": {} },
                "routing_key": routingKey,
                "delivery_mode": "1",
                "payload": StringifiedJsonAlert,
                "headers": {},
                "props": {},
                "payload_encoding": "string"
            },
            json: true
        };
        await request(options, (error, response, body) => {
            if (error) throw new Error(error)
            console.log(body)
            console.log(error)
        })
    }

    async apiServiceNow(incNumber) {
        const env_url = 'https://ustglobaldev.service-now.com/';
        const mainService_url = env_url + 'incident.do?JSONv2&sysparm_action=getRecords&sysparm_query=number=' + incNumber;
 
        await fetch(mainService_url, {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8", authorization: 'Basic U21hcnRvcHMuTmluZXR5b25lOkpSYVNxOU5LaCVXNysrakY=' }
        })
            // Converting to JSON
            .then(response => response.json())
            // Displaying results to console
            .then(result => {
               // console.log(result)
                let dd = result.records[0]
                let rr = JSON.stringify(dd);
                sss =  rr;
            });
        return sss;
    }
}

