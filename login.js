const logIn = document.getElementById("login-btn")
const inputEl = document.getElementById("input-enter");

const nameInput = document.getElementById("input-name")
const passwordInput = document.getElementById("input-password")

const logInAuthentication = () => {
  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;
  console.log(nameValue)
  console.log(passwordValue)
}
logIn.addEventListener('click', () => {
  console.log('hello world')
  logInAuthentication()
})