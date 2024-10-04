function sleep(ms) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sleep");
    }, ms);
  });
}

async function asyncCall() {
  console.log(1);
  await sleep(1000);
  console.log(2);
}

asyncCall();
