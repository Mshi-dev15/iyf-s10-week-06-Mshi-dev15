function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Test it
async function test() {
  console.log("Start");
  await delay(2000);
  console.log("This prints after 2 seconds");
}

test();