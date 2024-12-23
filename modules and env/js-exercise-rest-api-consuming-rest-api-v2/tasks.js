function task1() {
  return fetch("http://localhost:3000");
}

async function task2() {
  const response = await fetch("http://localhost:3000/task2", {
    method: "PATCH",
  });

  return response.json();
}

async function task3() {
  try {
    const response = await fetch(
      "http://localhost:3000/task3?user_id=3&role=admin",
      {
        method: "POST",
      }
    );
    return response.json(); 
  } catch (error) {
    console.error("Fetch error in task3:", error);
    return {};
  }
}

async function task4() {
  try {
    const response = await fetch("http://localhost:3000/task4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "admin",
        password: "password",
      }),
    });
    return response.json(); 
  } catch (error) {
    console.error("Fetch error in task4:", error);
    return {}; 
  }
}

export { task1, task2, task3, task4 };
