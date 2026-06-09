function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").style.display = "block";

  let music = document.getElementById("bgmusic");
  music.play();

  typeText();
}

function revealGift() {
  document.getElementById("gift").style.display = "block";
}

/* Typing effect */
let text = "Today is not just your birthday… it’s the day my world became better 💛";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
