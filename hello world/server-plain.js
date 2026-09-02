const http= require('http');
const server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=="/users"){
        res.writeHead(200,{"content-type":"plain/text"});
        res.write("welcome to ap sec D");
        res.end();
    }
})
server.listen(3000)