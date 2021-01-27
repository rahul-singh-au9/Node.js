// Events Module
// Node.js has a built-in module, called "Events"
// where you can create, fire, and listen for your own events

const EventEmitter = require("events")
const event  = new EventEmitter();

event.on("sayMyName", () => {
  console.log("heisenberg")
});
event.on("sayMyName", () => {
  console.log("let's cook")
});
event.emit("sayMyName");

// the concept is quite simple: emitter objects emit named events that cause previously registered listerners to be called. so, an emitter object basically has two main features:
//  Emitting name Events
// Registering and un-registering listerner functions

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit("checkPage", 200, "ok");