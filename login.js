const logIn = document.getElementById("login-btn")
const inputEl = document.getElementById("input-enter");

const nameInput = document.getElementById("input-name")
const passwordInput = document.getElementById("input-password")

const logInAuthentication = () => {
  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;
  if (!nameValue || !passwordValue) {
    alert('Please, Enter Your Username & Password')
    return;
  }
  if (nameValue === "admin" && passwordValue === "admin123") {
    window.location.assign("home.html")
  } else {
    alert('Invalid Username or Password')
  }
}
logIn.addEventListener('click', () => {
  logInAuthentication()
})
inputEl.addEventListener("keypress", event => {
  if (event.key === 'Enter') {
    logInAuthentication()
  }
})