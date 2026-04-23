async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (response.status === 404) {
      console.log("User not found, returning default user.");
      return { id: 0, name: "Guest User", email: "guest@example.com" };
    }

    const user = await response.json();
    return user;

  } catch (error) {
    console.error("Network error:", error);
    return { id: 0, name: "Guest User", email: "guest@example.com" };
  }
}

// Test with a real user (ID 1) and a fake one (ID 9999)
fetchUser(1).then(user => console.log("Found:", user.name));
fetchUser(9999).then(user => console.log("Got:", user.name));