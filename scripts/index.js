let startBtn = document.getElementById("start-btn");
let content = document.getElementById("content");

let title;
let subTitle;
let cat;
let catSad;
let confeti;

var yayAudio;
var backgroundAudio;
var awAudio;

const today = new Date();
const isMarch9 = today.getDate() === 9 && today.getMonth() === 2;

document.addEventListener('DOMContentLoaded', () => {
  startBtn = document.getElementById("start-btn");
  content = document.getElementById("content");

  title = document.getElementById("title");
  subTitle = document.getElementById("sub-title");
  cat = document.getElementById("cat");
  catSad = document.getElementById("cat-sad");
  confeti = document.getElementById("confeti");

  yayAudio = document.getElementById("yay");
  backgroundAudio = document.getElementById("backgroundMusic");
  aw = document.getElementById("aw");

  if (isMarch9) {
    const age = today.getFullYear() - 2004;
    subTitle.innerText = `¡¡CUMPLES ${age} AÑOS!!`
  } else {
    title.innerText = "Aún no..."
    cat.style.display = "none";
    catSad.style.display = "block";
    confeti.style.display = "none";
    const targetDate = new Date(today.getFullYear(), 2, 9)

    if (today > targetDate) {
      targetDate.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = targetDate - today;
    const daysUntilMarch9 = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    subTitle.innerText = `Quedan ${daysUntilMarch9} para tu cum :(`
  }
});

function start() {
  startBtn.classList.add("hidden");

  startBtn.addEventListener('transitionend', () => {
    content.style.display = "block";
    startBtn.style.display = "none";
    void content.offsetWidth;
    content.classList.add("show");

    if (isMarch9) {
      yayAudio.play();
      backgroundAudio.play();
    } else {
      aw.play();
    }
  }, { once: true });
}
