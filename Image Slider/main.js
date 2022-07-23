const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const intervalTime = 5000;
const auto = true;
let slideInterval;

function nextSlide() {
  const current = document.querySelector(".current");

  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
}

function prevSlide() {
  const current = document.querySelector(".current");

  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
}

next.addEventListener("click", function () {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", function () {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto Interval

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
