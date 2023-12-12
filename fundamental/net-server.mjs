import net from "net";

const server =  net.createServer((client) => {
    console.info("Client Connected");

    client.addListener("data",(data) => {
        console.info(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}`);
    });
});

server.listen(3000,"127.0.0.1");