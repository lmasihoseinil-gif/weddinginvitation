
// Fixed wedding moment: 30 Mehr 1405, 18:00 Tehran time.
// 30 Mehr 1405 corresponds to 22 October 2026.
const target = new Date("2026-10-22T18:00:00+03:30").getTime();

const fa = (n) =>
  String(n)
    .padStart(2, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

function updateCountdown() {
  let diff = Math.max(0, target - Date.now());

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;

  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;

  const minutes = Math.floor(diff / 60000);
  diff %= 60000;

  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").textContent = fa(days);
  document.getElementById("hours").textContent = fa(hours);
  document.getElementById("minutes").textContent = fa(minutes);
  document.getElementById("seconds").textContent = fa(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
