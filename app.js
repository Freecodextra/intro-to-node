const http = require('http');
const path = require('path');
const fs = require('fs');

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
   const url = req.url.toLowerCase();

   if (url === '/' || url === '/home' || url === "/index.html") {
    let filePath = path.join(__dirname,"public","index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
   } 
   
   else if (url === '/about' || url === "/about.html") {
    let filePath = path.join(__dirname,"public","about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
   } 
   
   else if (url === '/contact' || url === "/contact.html") {
    let filePath = path.join(__dirname,"public","contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
   } 
   
   
   else {
    fs.readFile("./public/404.html", "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
   }
});


server.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
});