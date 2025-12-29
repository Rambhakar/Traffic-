
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let timerEl = document.getElementById("timer");
let car = document.getElementById("car");

let started = false;
let countdownInterval;

const timings = {
   red: 2,
   yellow: 1,
   green: 9
};

function clearLights() {
   red.classList.remove("active");
   yellow.classList.remove("active");
   green.classList.remove("active");
}

function startCountdown(seconds) {
   let timeLeft = seconds;
   timerEl.textContent = timeLeft;

   clearInterval(countdownInterval);
   countdownInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) clearInterval(countdownInterval);
   }, 1000);
}

function startSignal() {
   if (started) return;
   started = true;

   function cycle() {
      // RED
      clearLights();
      red.classList.add("active");
      car.classList.add("stop");
      startCountdown(timings.red);

      setTimeout(() => {
         // YELLOW
         clearLights();
         yellow.classList.add("active");
         startCountdown(timings.yellow);
      }, timings.red * 1000);

      setTimeout(() => {
         // GREEN
         clearLights();
         green.classList.add("active");
         car.classList.remove("stop");
         startCountdown(timings.green);
      }, (timings.red + timings.yellow) * 1000);
   }

   cycle();
   setInterval(cycle, (timings.red + timings.yellow + timings.green) * 1000);
}

