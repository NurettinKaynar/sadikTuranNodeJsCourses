const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/blogs") {
        fs.readFile("blogs.html", (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/create" && req.method === "POST") {
        const data=[]
        req.on("data",(chunk)=>{
            data.push(chunk)
        })
        req.on("end",()=>{
            const result=Buffer.concat(data).toString()
            const parsedData=result.split("=")[1]

            fs.appendFile("blogs.txt",parsedData, (err, data) => {
                if (err) {
                    console.error("hata", err);
                    res.writeHead(500);
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        })
    } else if (req.url === "/create") {
        fs.readFile("create.html", (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        fs.readFile("404.html", (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
};

const server = http.createServer(requestListener);

server.listen(3000);

console.log(`Node.JS server listening on 3000`);
