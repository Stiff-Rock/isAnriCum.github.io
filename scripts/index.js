let startBtn
let deleteBtn
let content

let title;
let subTitle;
let cat;
let catSad;
let confeti;

var yayAudio;
var backgroundAudio;
var awAudio;

let userName = "";
let userBirthday;
let year;
const today = new Date();
let isBirthday;

document.addEventListener('DOMContentLoaded', () => {
  userName = localStorage.getItem('userName');
  userBirthday = new Date(localStorage.getItem('userBirthday'));

  if (userName && userBirthday) {
    year = userBirthday.getFullYear();
    isBirthday = today.getDate() === userBirthday.getDate() && today.getMonth() === userBirthday.getMonth();

    loadBirthday();
  } else
    askInput();
});

function deleteData() {
  localStorage.clear();
  location.reload();
}

function askInput() {
  const input = document.getElementById("input");
  input.style.display = "flex";
}

function loadBirthday() {
  startBtn = document.getElementById("start-btn");
  startBtn.style.display = "block";

  deleteBtn = document.getElementById('delete-btn');
  deleteBtn.style.display = "block";

  content = document.getElementById("content");

  title = document.getElementById("title");
  title.innerHTML = `¡¡FELIZ CUM ${userName.toUpperCase()}!!`;
  subTitle = document.getElementById("sub-title");
  cat = document.getElementById("cat");
  catSad = document.getElementById("cat-sad");
  confeti = document.getElementById("confeti");

  yayAudio = document.getElementById("yay");
  backgroundAudio = document.getElementById("backgroundMusic");
  aw = document.getElementById("aw");

  if (isBirthday) {
    const age = today.getFullYear() - year;
    subTitle.innerText = `¡¡CUMPLES ${age} AÑOS!!`
  } else {
    title.innerText = "Aún no..."
    cat.style.display = "none";
    catSad.style.display = "block";
    confeti.style.display = "none";
    const targetDate = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate())

    if (today > targetDate) {
      targetDate.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = targetDate - today;
    const daysUntilBirth = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    subTitle.innerText = `Quedan ${daysUntilBirth} para tu cum :(`
  }
}

function saveData() {
  const nombre = document.getElementById('nombreInput').value;
  const cumple = document.getElementById('cumpleInput').value;

  if (nombre && cumple) {
    localStorage.setItem('userName', nombre);
    localStorage.setItem('userBirthday', cumple);
    location.reload();
  } else {
    alert("Fields cannot be empty")
  }
}

function start() {
  deleteBtn.classList.add("hidden");
  startBtn.classList.add("hidden");

  startBtn.addEventListener('transitionend', () => {
    content.style.display = "block";
    startBtn.style.display = "none";
    deleteBtn.style.display = "none";
    void content.offsetWidth;
    content.classList.add("show");

    if (isBirthday) {
      yayAudio.play();
      backgroundAudio.play();
    } else {
      aw.play();
    }
  }, { once: true });
}
