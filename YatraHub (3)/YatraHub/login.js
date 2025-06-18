document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Page reload होऊ नये म्हणून

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // ✅ Simple validation (required fields are already set in HTML)
    if (username !== "" && password.length >= 6) {
      // ✅ Redirect to index.html
      window.location.href = "index.html";
    } else {
      // ❌ Show error message
      errorMsg.textContent = "Invalid username or password.";
      errorMsg.style.color = "red";
    }
  });
});
