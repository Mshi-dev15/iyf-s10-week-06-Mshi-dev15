// BEFORE - callback style
function getUserCallback(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}

getUserCallback(1, (err, user) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("User:", user.name);
  }
});




// AFTER - async/await style
async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log("User:", user.name);
  } catch (err) {
    console.error("Error:", err);
  }
}

getUser(1);