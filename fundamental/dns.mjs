import dns from "dns/promises";

const address = await dns.lookup("detik.com");

console.info(address);
console.info(address.address);
console.info(address.family);