document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("emailAddress").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const apiUrl =
      "https://celengankita-be-d43faaa69857.herokuapp.com/api/auth/login";

    try {
      const response = await loginUser(apiUrl, emailAddress, loginPassword);

      if (response.success) {
        // Login berhasil
        alert("Login successful");
        // Arahkan pengguna ke dashboard.html
        window.location.href = "dashboard.html";
      } else {
        // Login gagal
        alert("Login failed. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error during login");
    }
  });

  async function loginUser(apiUrl, email, password) {
    const data = {
      email: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    };

    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }
});
