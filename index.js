"use strict";

var pdf = require('html-pdf');
var ejs = require('ejs');
var fs = require('fs');

var Execution = global.ExecutionClass;

class pdfExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec() {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.getValues()
        .then((res) => {
          var options = res;
          if(res.typeoutput){
            options.type = res.typeoutput;
          }

          var html = fs.readFileSync(options.html, 'utf8');
          if(options.args){
            html = ejs.render(html,options.args);
          }

          pdf.create(html, options).toFile(options.output, function(err, res) {
            if (err) {
              var endOptions = {
                end: 'error',
                messageLog: `PDF Executor: ${err}`,
                execute_err_return: `PDF Executor: ${err}`,
                execute_return: ''
              };
              _this.end(endOptions, resolve, reject);
            }else{
              var endOptions = {
                end: 'end'
              };
              _this.end(endOptions, resolve, reject);
            }
          });
        });
    });
  }
}
module.exports = pdfExecutor;