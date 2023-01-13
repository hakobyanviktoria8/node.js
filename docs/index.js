// ex1
function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();

// ex2
//   function getSong() {
//     let _song = '';
//     let i = 10;
//     for (i; i > 0; i -= 1) {
//       _song += `${i} beers on the wall, you take one down and pass it around, ${
//         i - 1
//       } bottles of beer on the wall\n`;
//       if (i === 1) {
//         _song += "Hey let's get some more beer";
//       }
//     }
  
//     return _song;
//   }
  
//   function singSong(_song) {
//     if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//     console.log(_song);
//   }
  
//   const song = getSong();
//   // this will work
//   singSong(song);
  

//   ex3
// function getSong() {
//     let _song = '';
//     let i = 100;
//     for (i; i > 0; i -= 1) {
//       /* eslint-disable no-loop-func */
//     //   setTimeout(function () {
//         _song += `${i} beers on the wall, you take one down and pass it around, ${
//           i - 1
//         } bottles of beer on the wall\n`;
//         if (i === 1) {
//           _song += "Hey let's get some more beer";
//         }
//     //   }, 0);
//       /* eslint-enable no-loop-func */
//     }
  
//     return _song;
//   }
  
//   function singSong(_song) {
//     if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//     console.log(_song);
//   }
  
//   const song = getSong('beer');
//   // this will not work
//   singSong(song);
//   // Uncaught Error: song is '' empty, FEED ME A SONG!
  
  

//   ex4
// operations defined elsewhere and ready to execute
const operations = [
    { func: function1, args: args1 },
    { func: function2, args: args2 },
    { func: function3, args: args3 },
  ];
  
  function executeFunctionWithArgs(operation, callback) {
    // executes function
    const { args, func } = operation;
    func(args, callback);
  }
  
  function serialProcedure(operation) {
    if (!operation) process.exit(0); // finished
    executeFunctionWithArgs(operation, function (result) {
      // continue AFTER callback
      serialProcedure(operations.shift());
    });
  }
  
  serialProcedure(operations.shift());
  