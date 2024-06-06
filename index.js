var express = require('express')
var app = express()
app.get('/',function(req,res){
    res.send({
        'status' : true,
        'message': "Berhasil Terkoneksi"
    });
})

app.get('/users',function(req,res){
    res.send({
        'status' : true,
        'message': "Berhasil mengambil data users"
    });
})

app.post('/users',function(req,res){
    res.send({
        'status' : true,
        'message': "Berhasil mengambil data users dengan method POST"
    });
})

var server = app.listen(5000,function(){
    console.log('server listened on http://127.0.0.1:5000')
})