 // streams are a way to handle big data piece by piece, instead of loading everthing into memory ar once

const {createReadStream} = require('fs')

 const stream = createReadStream('./contnt/big.txt')

 stream.on('data', (result) => {
    console.log(result)
 })

 stream.on('error', (err) => {
    console.log(err);
 })