import net from "net";

const client = net.createConnection({port:3000, host:"127.0.0.1"});



client.addListener("data", function(data){
    console.info(`Receive data drom server: ${data.toString()}`);

});

setInterval(() => {
    client.write("Enjang Setiawan\r\n");
}, 2000);