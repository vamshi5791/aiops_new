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

  async readJson() {
    try {
      this.jsonData = JSON.parse(fs.readFileSync('./TestReport/cucumberreport.json', 'utf-8'));
      await console.log("====cucumber json data========");
      // console.log(this.jsonData);
      var ti = new Date();

      var tms = ti.toLocaleDateString("en-US") + ' ' + this.AddZero(ti.getHours()) + ':'
        + this.AddZero(ti.getMinutes());

      this.jsonData[0].id = this.jsonData[0].id + '|' + tms;

      await console.log("ID :" + this.jsonData[0].id);
      await console.log("========================JSON Start===================");
      // console.log(JSON.stringify(this.jsonData));
      await console.log("========================JSON End===================");
      
     await this.bindReportData();
    } catch (error) {
      await  console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of readJson ");
      await console.log(error);
    }


  }

  async AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
  }

  async bindReportData() {
    try {
      await fs.readFile('./TestReport/ReportTemplate.html', async (err, tdata) => {
        if (err) {
          return console.error(err);
        }

        var templateData = tdata.toString();
        await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> Before replace json data: ");

        var re = /jsondatabinding/gi;
         this.finalhtmlstring = templateData.replace(re, JSON.stringify(this.jsonData));
         await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> After replace json data: ");
        //console.log("Html final data: " + this.finalhtmlstring);
        await this.createReportFile()
      });
    } catch (error) {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of bindReportData ");
      await console.log(error);
    }

  }

  async createReportFile() {
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> Starting createReportFile: ");
    try {
      var html = '<h1>Hello</h1>'

      var reportFileName = './TestReport/ITOpsAutomation_Report.html';

      await fs.writeFile(reportFileName, this.finalhtmlstring, async function (err) {
        if (err) {
          await console.log("error in create file")
          await console.log(err)
          return console.error(err);
        }
        else {
          await  console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> HTML Report File created!");
          await  console.log("File created!");
          var reportDir = reportFileName
          var desDir = "./Previous_Reports/ITOpsAutomation_Report"
          if (fse.existsSync(reportDir)) {
            await fse.copySync(reportDir,
              await  desDir + "_" + moment().format("YYYYMMDD_HHmmss") + ".html", { overwrite: true }, async function (err) {
                if (err) {
                  await console.error(err);
                } else {
                  await  console.log("success!");
                }
              });
          }
        }
      });
    } catch (error) {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss") + " >>>>>>>> In Catch of createReportFile ");
      await console.log(error);
    }
  }
}
