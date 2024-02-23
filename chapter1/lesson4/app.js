const http=require('http')


const requestListener=(req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
        <html>
        <head>
        <title> Home </title>
        </head>
        <body>
        <h1>Home</h1>
        </body>
        </html>
        `)
    }
    else if( req.url==="/blogs"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
        <html>
        <head>
        <title> Blogs</title>
        </head>
        <body>
        <h1>Blogs</h1>
        </body>
        </html>
        `)
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write(`
        <html>
        <head>s
        <title> Page Not Found</title>
        </head>
        <body>
        <h1>Page Not Found</h1>
        </body>
        </html>
        `)
    }

    res.end()
}

const server=http.createServer(requestListener)

server.listen(3000)

console.log(`Node.JS server listening on 3000`);