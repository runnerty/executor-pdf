"use strict";

var pdf = require("html-pdf");
var ejs = require("ejs");
var fs = require("fs");

var Execution = global.ExecutionClass;

class pdfExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(options) {
    var _this = this;

    var html = fs.readFileSync(options.html, "utf8");
    if(options.args){
      html = ejs.render(html,options.args);
    }

    pdf.create(html, options).toFile(options.output, function(err) {
      if (err) {
        var endOptions = {
          end: "error",
          messageLog: `PDF Executor: ${err}`,
          err_output: `PDF Executor: ${err}`,
          msg_output: ""
        };
        _this.end(endOptions);
      }else{
        _this.end();
      }
    });
  }
}
module.exports = pdfExecutor;