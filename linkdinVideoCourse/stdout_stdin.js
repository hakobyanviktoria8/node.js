const question = [
  "What's your name?",
  "What's your goal?",
  "What you want in this life?",
];

const ansver = [];

function ask_and_ansver(i = 0) {
  process.stdout.write(`\n \n ${question[i]}`);
  process.stdout.write(" > ");
}
ask_and_ansver();
//give shanse call function, same as for loop
// ask_and_ansver(ansver.length);

process.stdin.on("data", function (data) {
  // process.stdout.write(data.toString().trim());
  ansver.push(data.toString().trim());
  if (ansver.length < question.length) {
    ask_and_ansver(ansver.length);
  } else {
    process.exit();
  }
});
process.on("exit", function () {
  console.log("thank you");
});
