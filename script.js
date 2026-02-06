const screens = ["screen1", "screen2", "screen3", "screen4"];

function showScreen(id) {
  screens.forEach(s => document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const startBtn = document.getElementById("startBtn");
const toQuestionBtn = document.getElementById("toQuestionBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const replayBtn = document.getElementById("replayBtn");

startBtn.addEventListener("click", () => showScreen("screen2"));
toQuestionBtn.addEventListener("click", () => showScreen("screen3"));

yesBtn.addEventListener("click", () => {
  showScreen("screen4");
  burstHearts();
});

replayBtn.addEventListener("click", () => showScreen("screen1"));

// Botón “no” que se escapa (divertido pero tierno)
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function burstHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(spawnHeart, i * 80);
  }
}

function spawnHeart() {
  const hearts = document.getElementById("hearts");
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = Math.random() > 0.2 ? "❤️" : "💖";
  h.style.left = `${Math.random() * 100}vw`;
  h.style.fontSize = `${18 + Math.random() * 18}px`;
  h.style.animationDuration = `${2.6 + Math.random() * 1.8}s`;
  hearts.appendChild(h);

  setTimeout(() => h.remove(), 4500);
}
