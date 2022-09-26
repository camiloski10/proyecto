const captcha = document.querySelector(".captcha"),
  reloadBtn = document.querySelector(".reload-btn"),
  inputField = document.querySelector(".input-area input"),
  checkBtn = document.querySelector(".check-btn"),
  statusTxt = document.querySelector(".status-text");
console.log(captcha)
let allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getcaptcha = () => {
  for (let i = 0; i < 6; i++) {
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`;
  }
}
getcaptcha();
reloadBtn.addEventListener("click", () => {
  removeContent();
  getcaptcha();
});
checkBtn.addEventListener("click", e => {
  e.preventDefault();
  statusTxt.style.display = "block";

  let inputVal = inputField.value.split('').join(' ');
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "bien, no eres un robot.";
    setTimeout(() => {
      removeContent();
      getcaptcha();
    }, 2000);
  } else {
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha no marcado. Por favor intenta de nuevo!";
  }
});

function removeContent() {
  inputField.value = "";
  captcha.innerText = "";
  statusTxt.style.display = "none";
}