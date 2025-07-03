let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.querySelector(".display");
const laps = document.querySelector(".laps");

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  laps.innerHTML = "";
}

function recordLap() {
  const li = document.createElement("li");
  li.textContent = timeToString(elapsedTime);
  laps.appendChild(li);
}
