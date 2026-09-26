// promise with TS

function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Rudra" });
    }, 1000);
  });
}

//asyc await

async function getUserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (err) {
    console.log("Error :", err);
  }
}

// generic async function

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

fetchData<string>("");
