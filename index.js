var express = require('express')
var app = express()
app.get('/',function(req,res){
    res.send({
        'status' : true,
        'message': "Berhasil Terkoneksi"
    });
})

var server = app.listen(5000,function(){
    console.log('server listened on http://127.0.0.1:5000')
})