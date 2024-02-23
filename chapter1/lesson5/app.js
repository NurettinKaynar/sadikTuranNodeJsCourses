const http=require('http')
const fs=require('fs')

const requestListener=(req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        
    }
    else if( req.url==="/blogs"){
        res.writeHead(200,{"Content-Type":"text/html"})

    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        
    }

    res.end()
}

const server=http.createServer(requestListener)

server.listen(3000)

console.log(`Node.JS server listening on 3000`);