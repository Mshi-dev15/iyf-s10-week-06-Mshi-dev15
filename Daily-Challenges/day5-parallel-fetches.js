async function fetchAll() {
  const endpoints = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/todos/1",
  ];

  // Start all 3 fetches at the same time
  const promises = endpoints.map(url =>
    fetch(url).then(res => res.json())
  );

  // Wait for all, even if some fail
  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Endpoint ${index + 1} succeeded:`, result.value);
    } else {
      console.log(`Endpoint ${index + 1} failed:`, result.reason);
    }
  });
}

fetchAll();