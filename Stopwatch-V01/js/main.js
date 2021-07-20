let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerReference = document.querySelector(".timer-display");
let interval = null;
const audio = new Audio(
  "https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/Stopwatch%2Fbeep.mp3?alt=media&token=bd43949a-30a4-4776-990e-454affbe37e7"
);

function play() {
  audio.play();
}

document.getElementById("startTimer").addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerReference.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerReference.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
