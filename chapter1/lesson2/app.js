const http=require('http')


const requestListener=(req,res)=>{
    res.end()
}

const server=http.createServer(requestListener)

server.listen(3000)

console.log(`Node.JS server listening on 3000`);