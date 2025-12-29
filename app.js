let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let startBtn = document.getElementById("startBtn");

let intervalId = null;

function clearLights() {
   red.classList.remove("active");
   yellow.classList.remove("active");
   green.classList.remove("active");
}

function trafficSignal() {
   clearLights();
   red.classList.add("active");

   setTimeout(() => {
      clearLights();
      yellow.classList.add("active");
   }, 3000);

   setTimeout(() => {
      clearLights();
      green.classList.add("active");
   }, 5000);
}

startBtn.addEventListener("click", () => {
   if (intervalId === null) {
      trafficSignal();
      intervalId = setInterval(trafficSignal, 8000);
      startBtn.innerText = "Signal Running...";
      startBtn.disabled = true;
   }
});
