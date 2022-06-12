import http from "http"
 const port = process.env.PORT || 5200;
 
 const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html")
    if(req.url == '/') {
        res.statusCode = 200;
        res.end("<h1>good morning</h1>")
    }
    else if(req.url == '/about') {
        res.statusCode = 200;
        res.end("<h1>about this page</h1>")
    }
    else {
        res.statusCode = 500 ;
        res.end("<h1>Not Found</h1>")
    }
 })
 server.listen(port, () => {
    console.log(`Server is listening on ${port}`)
 })