function step1() {
  const ms = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 1 done after ${ms}ms`);
      resolve();
    }, ms);
  });
}

function step2() {
  const ms = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 2 done after ${ms}ms`);
      resolve();
    }, ms);
  });
}

function step3() {
  const ms = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 3 done after ${ms}ms`);
      resolve();
    }, ms);
  });
}

async function runChain() {
  const start = Date.now();

  await step1();
  await step2();
  await step3();

  const total = Date.now() - start;
  console.log(`Total time: ${total}ms`);
}

runChain();