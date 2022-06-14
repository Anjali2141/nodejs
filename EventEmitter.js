import EventEmitter from "events";

const eventEmitter =  new EventEmitter();

eventEmitter.on("hello", ()=> {
    console.log("event is listened");
})
eventEmitter.emit("hello");

eventEmitter.on("trigger", (data) => {
    console.log(data + " then event is listened having some data")
})
eventEmitter.emit("trigger", "here's the data when event is triggered");