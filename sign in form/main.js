const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const container = document.querySelector("#container");

signUpButton.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});
