const http=require('http')
const fs=require('fs')

const requestListener=(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    if(req.url==="/"){
        fs.readFile("index.html",(err,data)=>{
            res.write(data)
            res.end()
        })
    }
    else if( req.url==="/blogs"){
        fs.readFile("blogs.html",(err,data)=>{
            res.write(data)
            res.end()
        })

    }
    else{
        fs.readFile("404.html",(err,data)=>{
            res.write(data)
            res.end()
        })
        
    }
}

const server=http.createServer(requestListener)

server.listen(3000)

console.log(`Node.JS server listening on 3000`);