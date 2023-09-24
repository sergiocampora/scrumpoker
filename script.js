document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Lista de usuarios y contraseñas válidos
      const users = [
          { username: "admin", password: "admin", role: "admin" },
          { username: "usuario", password: "user1", role: "user" },
          { username: "usuario2", password: "user2", role: "user" },
          { username: "usuario3", password: "user3", role: "user" },
          { username: "usuario4", password: "user4", role: "user" },
          { username: "usuario5", password: "user5", role: "user" },
      ];

      // Buscar el usuario en la lista
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
          if (user.role === "admin") {
              alert("Bienvenido, administrador.");
              // Redireccionar a la página de Scrum Poker del administrador
              window.location.href = "admin_scrum_poker.html ";
          } else {
              alert("Bienvenido, usuario.");
              // Redireccionar a la página de Scrum Poker para usuarios normales
              window.location.href = "user_scrum_poker.html";
          }
      } else {
          alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
  });
});
