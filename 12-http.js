const http = require('http')

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if (req.url ==='/about'){
        res.end('her is our short history')
    }
    res.end('OOOOOPs')
})


server.listen(5000)