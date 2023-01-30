const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How are you?", (answer) => {
  console.log(`Your answer: ${answer}`);
});
