const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1Btn = document.getElementById("pass1");
const pass2Btn = document.getElementById("pass2");
const genPass = document.querySelector(".genpass");

function getRandPass() {
  let pass = "";
  for (let i = 0; i < 15; i++) {
    pass += characters[Math.floor(Math.random() * characters.length)];
  }
  return pass;
}

genPass.addEventListener("click", function () {
  const passwordOne = getRandPass();
  const passwordTwo = getRandPass();
  document.getElementById("pass1").textContent = passwordOne;
  document.getElementById("pass2").textContent = passwordTwo;
});

pass1Btn.addEventListener("click", function () {
  navigator.clipboard.writeText(pass1Btn.textContent);
  alert("Copied the text: " + pass1Btn.textContent);
});
pass2Btn.addEventListener("click", function () {
  navigator.clipboard.writeText(pass2Btn.textContent);
  alert("Copied the text: " + pass2Btn.textContent);
});
