import { loginUser } from "./login.js";

loginUser("/your-login-endpoint", email, password, function (error, data) {
  if (error) {
    console.error("Login failed:", error);
  } else {
    // Handle successful login, for example, redirect to a success page
    window.location.href = "/success-page";
  }
});
