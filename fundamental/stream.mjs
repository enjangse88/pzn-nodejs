import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("eko\n");
writer.write("enjang\n");
writer.write("Setiawan");

writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => { console.info(data.toString())});
