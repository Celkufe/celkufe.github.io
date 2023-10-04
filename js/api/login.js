document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("emailAddress").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Ganti URL sesuai dengan endpoint login Anda
    const apiUrl =
      "https://celengankita-be-d43faaa69857.herokuapp.com/api/auth/login";

    try {
      const response = await loginUser(apiUrl, emailAddress, loginPassword);

      if (response.success) {
        // Login berhasil
        alert("Login successful");
        window.location.reload("dashboard.html");
      } else {
        // Login gagal
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error during login");
    }
  });

  // Fungsi loginUser
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
