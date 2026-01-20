// Modules

// CommonJS, every file is module (by default)
// modules - encapsulated code (we decide what we are sharing)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data.itmes)
console.log(names)

sayHi('derek')
sayHi(names.jhon)
sayHi(names.peter)

require('./7-mind-grenade')