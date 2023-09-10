const dayEl = document.querySelector(".day");
const timeEl = document.querySelector(".time");

const date = new Date();
let day = date.getDay();
let time;

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Defining showTime function
function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let mint = date.getMinutes();
  let sec = date.getSeconds();
  time = `${hours}:${mint}:${sec}`;
  timeEl.textContent = time;
}
showTime();

setInterval(showTime, 1000);

dayEl.textContent = daysOfWeek[day];
