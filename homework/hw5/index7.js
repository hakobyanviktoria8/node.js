const fs = require("fs")

fs.open("input.txt", "r+", (err, data)=>{
    const buffer = Buffer.alloc(65536)
    fs.read(data, buffer, 0, buffer.length,0 , (err, byte) => {
        const end = Buffer.from("end")
        console.log([...buffer].splice(7, end.length,end));
    })
})

fs.rename("input7.txt","inp7.txt", (err)=>{
    console.log(err?.message);
})

fs.unlink("inp7.txt", err => {
   err && console.log(err.message);
})

fs.mkdir("example",  err => {
    err && console.log(err.message);
 })

//  fs.readdir("./lesson1", (err, files) => {
//     err && console.log(err.message);
//     console.log(1111, files);
//     files.forEach( function (file) {
//         console.log( file );
//      });  
//  })

// console.log("Going to delete directory /tmp/test");
// fs.rmdir("/tmp/test",function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Going to read directory /tmp");
   
//    fs.readdir("/tmp/",function(err, files) {
//       if (err) {
//          return console.error(err);
//       }
//       files.forEach( function (file) {
//          console.log( file );
//       });
//    });
// });

// npm install fs-extra
