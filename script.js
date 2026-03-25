const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 21);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 30_000);

const notifyForm = document.querySelector(".notify");
notifyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = notifyForm.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Awesome. You're in!";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    notifyForm.reset();
  }, 2200);
});
