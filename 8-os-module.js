const os = require('os')

// cpu info
const cpu = os.cpus()
console.log(cpu)

// methode returns the system uptime in seconds
console.log(os.uptime())


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)