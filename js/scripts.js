// Función para la carga dinámica del navbar y footer
async function includeHTML(id, url) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;

  if (id === "navbar") {
    const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("nav-menu");

    if (btn && menu) {
      btn.addEventListener("click", () => {
        menu.classList.toggle("show");
      });

      // Cerrar el menú al hacer clic en cualquier enlace
      const enlaces = menu.querySelectorAll("a");
      enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {
          menu.classList.remove("show");
        });
      });
    }
  }
} 

// Filtro de adopciones
const botones = document.querySelectorAll(".filtro-boton");
const gatitos = document.querySelectorAll(".gatito-card");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    const filtro = boton.dataset.filtro;

    gatitos.forEach((gato) => {
      const zona = gato.dataset.zona;

      if (filtro === "todos" || zona === filtro) {
        gato.style.display = "block";
      } else {
        gato.style.display = "none";
      }
    });
  });
});
