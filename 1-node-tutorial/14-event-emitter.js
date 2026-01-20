// EventEmitter allows you to create your own events

const EventEmitter = require('events')

const myOwnEvent = new EventEmitter()

// listen for event 
myOwnEvent.on('response',(name,id) => {
    console.log(`data recieved usrer ${name}, his id is ${id}`)
})

// trigger the event
myOwnEvent.on('response', () => {
    console.log('some other logic')
})

myOwnEvent.emit('response',"derek",'dscnsdk32r')