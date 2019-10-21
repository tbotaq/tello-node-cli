const startCLI = require("./libs/cli");
const { sendCommand, closeSocket } = require("./libs/socket");

// Enter SDK mode
sendCommand("command");

startCLI(sendCommand, closeSocket);

process.on("uncaughtException", closeSocket);
