// import { join } from 'path';
import { browser } from 'protractor';

// import * as jspdf from 'jspdf';

// import { jsPDF } from "jspdf";
import { DriverProvider } from 'protractor/built/driverProviders';

// var jspdf = require('jspdf');
// var html2canvas = require('html2canvas');

// import * as jspdf from 'jspdf';
// import * as html2canvas from "html2canvas"

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




    // var path = require('path');




    // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF();

    // // doc.text('Hello World');

    // var htmlContent = '<div class="row" style="    margin-right: 0px;"><div class="col-md-12">' +
    //   '<div class="row" style="background-color: #5B5B5B;">' +
    //   '<div class="col-md-2" style="font-size: 20px; text-align: center; ' +
    //   'color: #fff;padding-left: 2%;">' +
    //   'logo' +
    //   '</div>' +
    //   '<div class="col-md-9" style="padding-top: 7.5px;' +
    //   'text-align: center;' +
    //   'font-size: x-large;' +
    //   'color: #fff;padding-left: 0%;    margin-left: -30px;">' +
    //   'UST ITOps Regression Automation - Test Results Summary' +
    //   '</div>' +
    //   '<div class="col-md-1" style="font-size: 20px; text-align: center;   ' +
    //   'color: #fff;padding-left: 3%;    padding-top: 10px;">' +
    //   'logo' +
    //   '</div>' +
    //   '</div>' +
    //   '<div class="col-md-12" style="display: none;">' +
    //   '<div style="padding-top:0.5%;float: right;">' +
    //   '<input type="file" id="ipFile" style="margin-top: -22px;" /></div></div></div>';//, 10, 10);

    // var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";


    // var DOMParser = require('dom-parser');

    // var quotes = new DOMParser().parseFromString(htmlContent, 'text/html');


    // console.log("================================HTML Doc=============================");

    // console.log(HTMLdoc);

    // doc.text('Hello', 10, 10);


    // doc.html(src: './TestReport/test.html');

    

    // doc.save("./TestReport/a4.pdf");





    // html2canvas(quotes)
    //   .then((canvas) => {
    //     //! MAKE YOUR PDF
    //     var pdf = new jsPDF('p', 'pt', 'letter');

    //     var ht = 1100;
    //     var wt = 900;
    //     console.log("================================HTML Doc 1=========================");

    //     for (var i = 0; i <= quotes.height / ht; i++) {


    //       console.log("================================HTML Doc " + (i + 1) + "=========================");

    //       //! This is all just html2canvas stuff
    //       var srcImg = canvas;
    //       var sX = 0;
    //       var sY = ht * i; // start 980 pixels down for every new page
    //       var sWidth = wt;
    //       var sHeight = ht;
    //       var dX = 0;
    //       var dY = 0;
    //       var dWidth = wt;
    //       var dHeight = ht;

    //       var onePageCanvas = document.createElement("canvas");
    //       onePageCanvas.setAttribute('width', '900');
    //       onePageCanvas.setAttribute('height', '900');
    //       var ctx = onePageCanvas.getContext("2d");////.getContext('2d');
    //       // details on this usage of this function: 
    //       // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
    //       ctx?.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);


    //       // document.body.appendChild(canvas);
    //       var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

    //       var width = onePageCanvas.width;
    //       var height = onePageCanvas.clientHeight;

    //       //! If we're on anything other than the first page,
    //       // add another page
    //       if (i > 0) {
    //         //, '791'
    //         pdf.addPage('612'); //8.5" x 11" in pts (in*72)
    //         // pdf.addPage()
    //       }
    //       //! now we declare that we're working on that page
    //       pdf.setPage(i + 1);
    //       //! now we add content to that page!
    //       pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62));

    //     }


    //     //! after the for loop is finished running, we save the pdf.
    //     // doc.save("./TestReport/a4.pdf");
    //     pdf.save("./TestReport/a4.pdf");

    //   });

    // console.log("================================HTML Doc End=========================");


    var reportFileName = './TestReport/ITOpsAutomation_Report.html';

    fs.writeFile(reportFileName, this.finalhtmlstring, function (err) {
      if (err) {
        console.log("error in create file")
        console.log(err)
        return console.error(err);
      }
      else {
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
  }



}
