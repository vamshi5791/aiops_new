var fetch = require("node-fetch");
var arr_state = { "1": "New", "2": "Active", "3": "Awaiting Problem", "8": "Awaiting Change", "4": "Awaiting User Info", "5": "Awaiting Customer IT", "6": "Resolved", "11": "Awaiting Vendor", "12": "On Hold" };
var txt = '{}';
var obj;
var customJson;
export class ServiceNowAPI {

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
                obj = JSON.parse(txt);
                obj.short_description = dd.short_description;
                obj.state = arr_state[dd.state];
                customJson = obj;
                // console.log('line:112:' + dd.short_description)
                // //sss = "Line130" + dd.short_description;
            });
        return customJson;
    }








}
