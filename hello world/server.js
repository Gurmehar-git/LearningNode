const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("")
    res.end("hello guys");
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
})