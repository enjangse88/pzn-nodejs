function samplePromise(){
    return Promise.resolve("enjang")
}

async function run(){
  const name = await samplePromise();
   console.info(name);

}

run();