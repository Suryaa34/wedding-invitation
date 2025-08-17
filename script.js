function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

// Countdown
const targetDate = new Date("Nov 30, 2025 09:00:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik ";

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Acara Telah Dimulai 🎉";
  }
}, 1000);
