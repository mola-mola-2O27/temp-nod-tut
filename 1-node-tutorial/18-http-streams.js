const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{ // 'open' triggers when the file is ready to be read
        fileStream.pipe(res) // pipe() automatically sends fileStream to response
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(5000)