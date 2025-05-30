<<<<<<< HEAD
async function includeHTML(id, url) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}
=======
// opcional porque aún no lo vimos
>>>>>>> b957d74 (restructuracion de carpetas)
