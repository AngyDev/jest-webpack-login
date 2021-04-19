const loginError = document.getElementById("loginError");
const errorBtn = document.getElementById("errorBtn");

errorBtn && errorBtn.addEventListener('click', () => {
    loginError.style.display = "none";
})