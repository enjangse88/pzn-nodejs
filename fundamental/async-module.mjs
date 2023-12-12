function samplePromise(){
    return Promise.resolve("enjang")
}

const name = await samplePromise();
console.info(name);