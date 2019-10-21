const readline = require("readline");

const startCLI = (onInput, onClose) => {
  const cli = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  });

  cli.on("line", input => {
    if(input === "q"){
      cli.close();
    } else {
      onInput(input);
    }
  }).on("close", () => {
    onClose();
    process.exit(0);
  })
}

module.exports = startCLI;
