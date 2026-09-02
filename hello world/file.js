const fs= require("fs");

// //sync
// fs.writeFileSync("./test.txt","Hello");

//async
fs.writeFile("./test.txt", "Hello async", (err) => {
  if (err) throw err;
  console.log("File updated");
});

//sync
fs.readFileSync("./test.txt", "utf-8")
  console.log(data);

  
//async
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.appendFile("./test.txt", "Hello async append", (err) => {
  if (err) throw err;
  console.log("File updated");
});

fs.cpSync("./test.txt", "./test2.txt");

fs.unlinkSync("./test2.txt");