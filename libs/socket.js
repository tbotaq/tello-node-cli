// Where your Tello is waiting for the commands sent from you.
const HOST = "192.168.10.1";
const PORT = 8889;

const socket = require("dgram").createSocket("udp4");

socket.on("listening", () => {
  const { address, port } = socket.address();
  console.log(`Listening on ${address}:${port}`);
});
socket.on("message", (message, _rinfo) => console.log(`Received: ${message}`));
socket.on("error", err => {
  console.log(`Error: ${err}\n closing socket`);
  socket.close();
});

// Whichever port on your computer will be fine to communicate with Tello.
socket.bind();

const sendCommand = command => {
  const message = Buffer.from(command);
  socket.send(message, 0, message.length, PORT, HOST);
}

const closeSocket = () => socket.close();

module.exports = { sendCommand, closeSocket };
