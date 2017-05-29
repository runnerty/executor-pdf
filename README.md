# PDF executor for [Runnerty]:

#### EJS Compatible

### Configuration sample:
```json
{
  "id":"pdf_default",
  "type":"@runnerty/executor-pdf"
}
```

### Plan sample:
#### https://github.com/marcbachmann/node-html-pdf#options
```json
{
  "id":"pdf_default",
  "html":"sample.html",
  "output":"sample.pdf",
  "papersize":{
    "format":"A4",
    "orientation":"portrait"
  }
```

### Plan advanced:
#### https://github.com/marcbachmann/node-html-pdf#options
```json
{
  "id":"pdf_default",
  "html":"/etc/runnerty/sample.html",
  "output":"/etc/runnerty/sample.pdf",
  "papersize":{
    "format":"A4",
    "orientation":"portrait"
  },
  "pageoptions":{
    "border": "1cm"
  },
  "typeoutput":"pdf",
  "quality": "80",
  "timeout": 30000,
  "args":{
    "created_date":":MMMM_EN, :DD :YYYY",
    "due_date":":MMMM_EN, :DD :YYYY",
    "invoice_id":":YYYY:MM0000:HH:mm:ss"
  },
  "header": {
    "height": "45px",
    "contents": "<div style=\"text-align: right;\">Runnerty sample - PDF Executor</div>"
  },
  "footer": {
    "height": "25mm",
    "contents": {
      "default": "<span style=\"color: #444;\">{{page}}</span>/<span>{{pages}}</span>",
      "first": "First page",
      "2": "Second page",
      "last": "Last Page"
    }
  },
  "httpHeaders": {
    "Authorization": "Bearer ABCDE-1324-1234-1234"
  }
}
```

[Runnerty]: http://www.runnerty.io
