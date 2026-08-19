const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menu = document.querySelector(".nav-container");

burger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const img = document.querySelector(".logo")

img.addEventListener("click", () => {
  img.classList.toggle("active2")
});

const btn = document.querySelector(".btn")
const alertBox = document.querySelector("#custom-alert");

btn.addEventListener("click", () => {
  alertBox.classList.add("show");
});
function closeAlert() {
  alertBox.classList.remove("show");
}


const inputs = document.querySelectorAll('.Form input, .Form textarea');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    setTimeout(() => {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  });
});


const Btn2 = document.querySelector(".btn2");

const alert2 = document.querySelector("#custom-alert");

const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#Email");


Btn2.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    alert("please fill in all the fields")
  }
  else {
    alert2.classList.add("show");
    document.querySelector("form").reset();
  }

})


