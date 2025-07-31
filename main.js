// Select Landing Page Element
let landingPage = document.querySelector(".home-about");

let imgsArray = [
  "woman-patient-dentist.jpg",
  "doctor-8.jpg",
  "modern-dental-office-workplace.jpg",
  "nurse-doctor.jpg",
];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  landingPage.classList.add("fade");

  landingPage.style.backgroundImage =
    'url("images/' + imgsArray[randomNumber] + '")';

  setTimeout(() => {
    landingPage.classList.remove("fade");
  }, 1000);
}, 3000);

// Select Toggle View Element
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
