const fs=require("fs");

//sync
fs.writeFileSync("small_data.csv","id,username,value\n");
//to append each time into the csv- table file, we can use appendFileSync method of fs module
for(let i=1;i<=4;i++){
    fs.appendFileSync("small_data.csv",`${i},user${i},${Math.floor(Math.random()*100)}\n`);
}
//when the data is large, it is read in chunks, which are by default 64kb in size. so we can read the data efficiently using streams. 
const stream= fs.createReadStream("small_data.csv","utf-8");
let count=0;
stream.on("data",(chunk)=>{
    count++;
    console.log(chunk);
});

stream.on("end",()=>{
    console.log("No more data to read");
    console.log(`Total chunks read: ${count}`);
});
