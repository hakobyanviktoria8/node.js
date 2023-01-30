console.log(process.argv);
// log 2line, then we can write what we want
// [
//   "C:\\Program Files\\nodejs\\node.exe",
//   "C:\\Users\\Viktorya\\Desktop\\node.js\\linkdinVideoCourse\\process_argv.js",
//   "__hello",
//   "Viki",
// ];

function flagArr(flag) {
  const idx = process.argv.indexOf(flag);
  console.log(process.argv[idx]);
}

flagArr("__hello");
flagArr("__hello11");
flagArr("Viki");
