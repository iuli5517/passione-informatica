// LOGIN LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const response = await fetch("https://passione-informatica-backend.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("errorMsg").textContent = "Credenziali errate!";
      }
    });
  }
});

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
