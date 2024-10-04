function retrieveData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Luka" });
    }, 1000);
  });
}

retrieveData()
  .then((result) => {
    console.log("then/catch", result);
  })
  .catch((error) => {
    console.error('error: ',error);
  });

async function asyncCall() {
  try {
    const result = await retrieveData();
    console.log("(async/await):", result);
  } catch (error) {
    console.error('error',error);
  }
}

asyncCall();
