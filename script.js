const input = document.getElementById("email-input");
const heroForm = document.getElementById("hero-form");
const heroSucces = document.getElementById("hero-success");
const form = document.getElementById("email-form");
const errorMsg = document.getElementById("error-input");
const successBtn = document.getElementById("succes-btn");
const emailUser = document.getElementById("email-user");

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.innerHTML = "Valid email required";
    errorMsg.classList.remove("hidden");
    input.classList.add("bg-red-100");
    input.classList.add("border-red-500");
    heroSucces.classList.add("hidden");
  } else if (!emailRegex.test(input.value)) {
    errorMsg.innerHTML = "Valid email required";
    errorMsg.classList.remove("hidden");
    input.classList.add("bg-red-100");
    input.classList.add("border-red-500");
    heroSucces.classList.add("hidden");
  } else {
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hidden");
    heroForm.classList.add("hidden");
    heroSucces.classList.remove("hidden");
    emailUser.innerHTML = input.value + ".";
    input.classList.remove("bg-red-100");
    input.classList.remove("border-red-500");
  }
});

successBtn.addEventListener("click", (e) => {
  heroSucces.classList.add("hidden");
  heroForm.classList.remove("hidden");
});
