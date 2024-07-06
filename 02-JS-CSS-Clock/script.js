// Clock Hands
const hourHand = document.querySelector('.hand--hour');
const minHand = document.querySelector('.hand--min');
const secHand = document.querySelector('.hand--seconds');

function setTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const secs = currentTime.getSeconds();

  // calculate degrees to rotate each hand
  const hourDeg = (hour / 12) * 360;
  const minsDeg = (mins / 60) * 360;
  const secsDeg = (secs / 60) * 360;

  // rotate each hand
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minHand.style.transform = `rotate(${minsDeg}deg)`;
  secHand.style.transform = `rotate(${secsDeg}deg)`;
}

setInterval(() => setTime(), 1000);
