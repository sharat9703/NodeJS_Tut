let events = require("events");
let eventEmitter = new events.EventEmitter();

let myEventHandler = ()=>{
    console.log("I heard a Scream!");
}

eventEmitter.on('scream',myEventHandler);

eventEmitter.emit('scream');