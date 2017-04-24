var http = require('http');

http.createServer(function (req, res) {
    let q=req.url.split('?'),params={};
    if(q.length>=2){
        q[1].split('&').forEach((item)=>{
             try {
               params[item.split('=')[0]]=item.split('=')[1];
             } catch (e) {
               params[item.split('=')[0]]='';
             }
        })
    }
    punch = params.punch;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
}).listen(8080);
