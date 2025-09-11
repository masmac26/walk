let timerDisplay = document.getElementById("timer");
let challengeDisplay = document.getElementById("challenge");
let startBtn = document.getElementById("startBtn");

let timer;
let seconds = 0;

const challenges = [
  "Notice 3 different bird sounds 🐦",
  "Find a tree taller than you 🌳",
  "Wave at someone you pass 👋",
  "Take a deep breath and smile 🙂",
  "Spot a cloud that looks like something ☁️"
];

function startWalk() {
  // reset
  clearInterval(timer);
  seconds = 0;
  timerDisplay.textContent = "00:00";

  // start timer
  timer = setInterval(() => {
    seconds++;
    let mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }, 1000);

  // random challenge
  let randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  challengeDisplay.textContent = "🎯 Challenge: " + randomChallenge;
}

startBtn.addEventListener("click", startWalk);
