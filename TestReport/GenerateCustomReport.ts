// import { join } from 'path';
import jsPDF from 'jspdf';
import { browser } from 'protractor';

var jspdf = require('jspdf');
var html2canvas = require('html2canvas');
var fs = require('fs');
var moment = require("moment");
var fse = require("fs-extra");

export class GenerateCustomReport {

  jsonData: any = null;
  finalhtmlstring: any = "";
  noOfTCs: any = "";

  readJson() {
    try {
      this.jsonData = JSON.parse(fs.readFileSync('./TestReport/cucumberreport.json', 'utf-8'));
      console.log("====cucumber json data========");
      // console.log(this.jsonData);
      var ti = new Date();

      var tms = ti.toLocaleDateString("en-US") + ' ' + this.AddZero(ti.getHours()) + ':'
        + this.AddZero(ti.getMinutes());

      this.jsonData[0].id = this.jsonData[0].id + '|' + tms;

      console.log("ID :" + this.jsonData[0].id);
      console.log("========================JSON Start===================");
      // console.log(JSON.stringify(this.jsonData));
      console.log("========================JSON End===================");
      this.bindReportData();
    } catch (error) {
      console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of readJson ");
      console.log(error);
    }


  }

  AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
  }

  bindReportData() {
    try {
      fs.readFile('./TestReport/ReportTemplate.html', (err, tdata) => {
        if (err) {
          return console.error(err);
        }

        var templateData = tdata.toString();
        console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> Before replace json data: ");

        var re = /jsondatabinding/gi;
        this.finalhtmlstring = templateData.replace(re, JSON.stringify(this.jsonData));
        console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> After replace json data: ");
        //console.log("Html final data: " + this.finalhtmlstring);
        this.createReportFile()
      });
    } catch (error) {
      console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of bindReportData ");
      console.log(error);
    }

  }

  createReportFile() {
    try {
      var html = '<h1>Hello</h1>'

      var reportFileName = './TestReport/ITOpsAutomation_Report.html';

      fs.writeFile(reportFileName, this.finalhtmlstring, function (err) {
        if (err) {
          console.log("error in create file")
          console.log(err)
          return console.error(err);
        }
        else {
          console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> HTML Report File created!");
           console.log("File created!");
          var reportDir = reportFileName
          var desDir = "./Previous_Reports/ITOpsAutomation_Report"
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
      });
    } catch (error) {
      console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of createReportFile ");
      console.log(error);
    }
  }
}
