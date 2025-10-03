// 2ND_CAROUSEL_SPACES. || SPACES_CAROUSEL. //
const spacesWrapper = document.getElementById("carousel-spaces");
let prevSpacesBtn = document.getElementById("prevSpacesBtn");
let nextSpacesBtn = document.getElementById("nextSpacesBtn");
let prevSpacesImg = prevSpacesBtn.querySelector("img");
let nextSpacesImg = nextSpacesBtn.querySelector("img");
let spacesSlides = spacesWrapper.children;
let activeSpacesIndex = 1;

function resetSpacesButtons() {
  prevSpacesBtn.classList.remove("active");
  nextSpacesBtn.classList.remove("active");
  prevSpacesImg.src = "images/arr-sil-left.svg";
  nextSpacesImg.src = "images/arr-sil-right.png";
  prevSpacesBtn.style.transform = "none";
  nextSpacesBtn.style.transform = "none";
}

function setSpacesSlide() {
  Array.from(spacesSlides).forEach((spacesSlides, i) => {
    spacesSlides.classList.add("active", i === activeSpacesIndex);
  });
}

function prevSpacesSlide() {
  spacesWrapper.insertBefore(
    spacesWrapper.lastElementChild,
    spacesWrapper.firstElementChild
  );
  resetSpacesButtons();
  prevSpacesBtn.classList.add("active");
  prevSpacesImg.src = "images/Group 1 (1).svg";
  prevSpacesBtn.style.transform = "rotate(180deg)";
  setSpacesSlide();
}

function nextSpacesSlide() {
  spacesWrapper.appendChild(spacesWrapper.firstElementChild);
  resetSpacesButtons();
  nextSpacesBtn.classList.add("active");
  nextSpacesImg.src = "images/Group 1 (1).svg";
  setSpacesSlide();
}

nextSpacesBtn.addEventListener("click", nextSpacesSlide);
prevSpacesBtn.addEventListener("click", prevSpacesSlide);

setSpacesSlide();

// 3rd_vertical_carousel. || Vertical_Carousel. //
const textItems = document.querySelectorAll(".facilities-text li");
const image = document.getElementById("facilities-image");
const indicate = document.querySelectorAll(".facilities-indicate");
const currentSlide = document.getElementById("facilities-current-slides"); // ✅ fixed
const totalSlides = document.getElementById("facilities-total-slides");

const images1 = [
  "images/Rectangle 17.svg",
  "images/image 10 (1).svg",
  "images/Rectangle 17.svg",
  "images/image 10 (1).svg",
];

totalSlides.textContent = images1.length.toString().padStart(2, "0");

function goToSlide(index) {
  textItems.forEach((el) => el.classList.remove("active"));
  indicate.forEach((el) => el.classList.remove("active"));

  textItems[index].classList.add("active");
  indicate[index].classList.add("active");

  image.src = images1[index];
  currentSlide.textContent = (index + 1).toString().padStart(2, "0"); // ✅ works now
}

textItems.forEach((item, index) => {
  item.addEventListener("click", () => goToSlide(index));
});

indicate.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});
goToSlide(0);

// 4th_Carousel. || Height_Change_Carousel. //
const frispesWrapper = document.getElementById("carousel-frispes");
let prevFrispesBtn = document.getElementById("prevFrispesBtn");
let nextFrispesBtn = document.getElementById("nextFrispesBtn");
let prevFrispesImg = prevFrispesBtn.querySelector("img");
let nextFrispesImg = nextFrispesBtn.querySelector("img");
let frispesSlides = frispesWrapper.children;
let activeFrispesIndex = 1;

function resetFrispesButtons() {
  prevFrispesBtn.classList.remove("active");
  nextFrispesBtn.classList.remove("active");
  prevFrispesImg.src = "images/arr-sil-left.svg";
  nextFrispesImg.src = "images/arr-sil-right.png";
  prevFrispesBtn.style.transform = "none";
  nextFrispesBtn.style.transform = "none";
}

function setFrispesSlide() {
  Array.from(frispesSlides).forEach((frispesSlide, i) => {
    frispesSlide.classList.toggle("active", i === activeFrispesIndex);
  });
}

function prevFrispesSlide() {
frispesWrapper.insertBefore(
    frispesWrapper.lastElementChild,
    frispesWrapper.firstElementChild
  );
  resetFrispesButtons();
  prevFrispesBtn.classList.add("active");
  prevFrispesImg.src = "images/Group 1 (1).svg";
  prevFrispesBtn.style.transform = "rotate(180deg)";
    setFrispesSlide();
}

function nextFrispesSlide() {
    frispesWrapper.appendChild(frispesWrapper.firstElementChild);
  resetFrispesButtons();
  nextFrispesBtn.classList.add("active");
  nextFrispesImg.src = "images/Group 1 (1).svg";
  setFrispesSlide();
}

nextFrispesBtn.addEventListener("click", nextFrispesSlide);
prevFrispesBtn.addEventListener("click", prevFrispesSlide);

setFrispesSlide();


// 5TH_AUTO_SLIDE_CAROUSEL. || AUTO_SLIDE_CAROUSEL. //
const carousel = document.getElementById("auto-carousel");
const slider = document.getElementById("auto-slider");
let slides = Array.from(slider.children); // use slider, not track
const slidesToShow = 6;
const autoplayInterval = 1000;
let slideWidth = 0;

function setSizes() {
  const containerWidth = carousel.clientWidth - 32;
  const totalGap = 12 * (slidesToShow - 1);
  slideWidth = Math.floor((containerWidth - totalGap) / slidesToShow);   
  slides.forEach((s) => (s.style.width = slideWidth + "px"));
}

function moveNext() {
  let firstSlide = slider.firstElementChild; // use slider
  slider.appendChild(firstSlide);
  slides = Array.from(slider.children);
}

function movePrev() {
  let lastSlide = slider.lastElementChild; // use slider
  slider.insertBefore(lastSlide, slider.firstElementChild);
  slides = Array.from(slider.children);
}

function startAuto() {
  setInterval(() => {
    moveNext();
  }, autoplayInterval);
}

window.addEventListener("resize", setSizes);
setSizes();
startAuto();


// 6th_WRAPPER_CAROUSEL. || WRAPPER_CAROUSEL. //
const reviewsWrapper = document.getElementById("carousel-reviews");
let prevReviewsBtn = document.getElementById("prevReviewsBtn");
let nextReviewsBtn = document.getElementById("nextReviewsBtn");
let prevReviewsImg = prevReviewsBtn.querySelector("img");
let nextReviewsImg = nextReviewsBtn.querySelector("img");
let reviewSlides = reviewsWrapper.children;
let activeIndex = 1;

function resetReviewsButtons() {
  prevReviewsBtn.classList.remove("active");
  nextReviewsBtn.classList.remove("active");
  prevReviewsImg.src = "images/arr-sil-left.svg";
  nextReviewsImg.src = "images/arr-sil-right.png";
  prevReviewsBtn.style.transform = "none";
  nextReviewsBtn.style.transform = "none";
}

function setReviewsSlide() {
  Array.from(reviewSlides).forEach((slide, i) => {
    slide.classList.toggle("active", i === activeIndex);
  });
}

function prevReviewsSlide() {
  reviewsWrapper.insertBefore(
    reviewsWrapper.lastElementChild,
    reviewsWrapper.firstElementChild
  );
  resetReviewsButtons();
  prevReviewsBtn.classList.add("active");
  prevReviewsImg.src = "images/Group 1 (1).svg";
  prevReviewsBtn.style.transform = "rotate(180deg)";
  setReviewsSlide();
}

function nextReviewsSlide() {
  reviewsWrapper.appendChild(reviewsWrapper.firstElementChild);
  resetReviewsButtons();
  nextReviewsBtn.classList.add("active");
  nextReviewsImg.src = "images/Group 1 (1).svg";
  setReviewsSlide();
}

nextReviewsBtn.addEventListener("click", nextReviewsSlide);
prevReviewsBtn.addEventListener("click", prevReviewsSlide);

setReviewsSlide();
  
// ButtonColorChange.
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".button-background-change");
  let columns = document.querySelectorAll(".column-background-change");
  buttons.forEach(function (button, idx) {
    let column = columns[idx];
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = "white";
      button.style.color = "#FF5722";
      if (column) {
        column.style.backgroundColor = "#FF5722";
        column.style.color = "white";
      }
    });
    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "";
      button.style.color = "";
      if (column) {
        column.style.backgroundColor = "";
        column.style.color = "";
      }
    });
  });
});
// window.addEventListener("resize", updateAllCarousels);
// updateAllCarousels();
