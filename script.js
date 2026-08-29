// EDITA SOLO ESTOS DOS ENLACES PARA CONECTAR TU SERVIDOR:
const JOTFORM_URL = "https://form.jotform.com/"; // pega aquí tu formulario
const DISCORD_URL = "https://discord.com/";      // pega aquí tu invitación de Discord

document.getElementById("applyBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (JOTFORM_URL === "https://form.jotform.com/") {
    alert("Primero coloca el enlace de tu formulario Jotform en script.js.");
  } else {
    window.open(JOTFORM_URL, "_blank");
  }
});

document.getElementById("discordBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (DISCORD_URL === "https://discord.com/") {
    alert("Primero coloca la invitación de tu servidor Discord en script.js.");
  } else {
    window.open(DISCORD_URL, "_blank");
  }
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});
