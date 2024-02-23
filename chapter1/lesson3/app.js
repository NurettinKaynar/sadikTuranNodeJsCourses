const http=require('http')


const requestListener=(req,res)=>{
    // console.log("gelen request",req.url,req.method);
    // console.log("giden cevap",res.statusCode);
    res.setHeader('Content-Type','text/html')
    res.statusCode=200
    res.statusMessage="OK"
    res.write("<h1>anasayfa</h1>")
    res.write("<p>Urunler</p>")
    res.end()
}

const server=http.createServer(requestListener)

server.listen(3000)

console.log(`Node.JS server listening on 3000`);