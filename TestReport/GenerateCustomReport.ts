import { join } from 'path';
import { browser } from 'protractor';




var fs = require('fs');
var moment = require("moment");
var fse = require("fs-extra");

export class GenerateCustomReport {

  jsonData: any = null;
  finalhtmlstring: any = "";
  noOfTCs: any = "";

  async readJson() {

    this.jsonData = JSON.parse(fs.readFileSync('./TestReport/cucumberreport.json', 'utf-8'))
    // console.log("====cucumber json data========");
    // // console.log(this.jsonData);
    // console.log("========================After data===================");
    this.bindReportData();
  }

  async bindReportData() {
    fs.readFile('./TestReport/ReportTemplate.html', (err, tdata) => {
      if (err) {
        return console.error(err);
      }
      //debugger
      var templateData = tdata.toString();


      var re = /jsondatabinding/gi;
      this.finalhtmlstring = templateData.replace(re, JSON.stringify(this.jsonData));
      //console.log("Html final data: " + this.finalhtmlstring);
      this.createReportFile()
    });
  }


  


  createReportFile() {
    var html = '<h1>Hello</h1>'

    fs.writeFile('./TestReport/Custom_Test_Report.html', this.finalhtmlstring, function (err) {
      if (err) {
        console.log("error in create file")
        console.log(err)
        return console.error(err);
      }
      else {
        console.log("File created!");
        var reportDir = "./TestReport/Custom_Test_Report.html"
        var desDir = "./Previous_Reports/Custom_Test_Report"
        if (fse.existsSync(reportDir)) {
          fse.copySync(reportDir,
            desDir + "_" + moment().format("YYYYMMDD_HHmmss") + ".html", { overwrite: true }, function (err) {
              if (err) {
                console.error(err);
              } else {
                console.log("success!");
              }
            });
        }

      }
      console.log("File created!");

      //const url = './Reports/Custome_Test_Report.html';
      //browser.get(url);
      //browser.navigate();
      // window.open("https://www.google.co.in/")

    });
  }



}
