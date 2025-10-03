// let index = 0;
// const slide = document.getElementById("carouselSlide");
// const images = slide.getElementsByTagName("img");
// const total = images.length;
// const indicators = document.getElementsByClassName("indicator");

// function showSlide() {
//   slide.style.transform = "translateX(" + -index * 100 + "%)";
//   updateIndicators();
// }
// function nextSlide() {
//   index++;
//   if (index >= total) {
//     index = 0;
//   }
//   showSlide();
// }
// function prevSlide() {
//   index--;
//   if (index < 0) {
//     index = total - 1;
//   }
//   showSlide();
// }
// function goToSlides(n) {
//   index = n;
//   showSlide();
// }
// function updateIndicators() {
//   for (let i = 0; i < indicators.length; i++) {
//     indicators[i].classList.remove("active");
//   }
//   indicators[index].classList.add("active");
// }
// setInterval(nextSlide, 3000);
// console.log(indicators);

// // 2rd_Caarousel. || Spaces_Carousel. //
// let wrapper = document.querySelector(".carousel-wrapper");
// let slides = document.querySelectorAll(".carousel-slide");
// let prevBtn = document.getElementById("prev-Btn");
// let nextBtn = document.getElementById("next-Btn");
// let prevImg = prevBtn.querySelector("img");
// let nextImg = nextBtn.querySelector("img");

// slides[0].classList.add("active");

// // function updateMobileSlides() {
// //   const slides = document.querySelectorAll('.carousel-wrapper .carousel-slide');
// //   const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
// //   if (window.innerWidth < 770) {
// //     slides.forEach((slide, i) => {
// //       slide.style.display = i === activeIndex ? 'block' : 'none';
// //     });
// //   } else if (window.innerWidth >= 770 && window.innerWidth < 1200) {
// //     slides.forEach((slide, i) => {
// //       if (i === activeIndex || i === (activeIndex + 1) % slides.length) {
// //         slide.style.display = 'block';
// //       } else {
// //         slide.style.display = 'none';
// //       }
// //     });
// //   } else {
// //     slides.forEach(slide => {
// //       slide.style.display = '';
// //     });
// //   }
// // }

// function setActiveSlide() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   let middleIndex = Math.floor(slides.length / 2 - 1);
//   slides[middleIndex].classList.add("active");
//   updateMobileSlides();
// }

// function resetButtons() {
//   prevBtn.classList.remove("active");
//   nextBtn.classList.remove("active");
//   prevImg.src = "images/arr-sil-left.svg";
//   nextImg.src = "images/arr-sil-right.png";
//   prevBtn.style.transform = "none";
//   nextBtn.style.transform = "none";
// }

// nextBtn.addEventListener("click", function () {
//   let firstSlide = wrapper.firstElementChild;
//   wrapper.appendChild(firstSlide);
//   slides = document.querySelectorAll(".carousel-slide");
//   setActiveSlide();
//   resetButtons();
//   nextBtn.classList.add("active");
//   nextImg.src = "images/Group 1 (1).svg";
// });

// prevBtn.addEventListener("click", function () {
//   let lastSlide = wrapper.lastElementChild;
//   wrapper.insertBefore(lastSlide, wrapper.firstElementChild);
//   slides = document.querySelectorAll(".carousel-slide");
//   setActiveSlide();

//   resetButtons();
//   prevBtn.classList.add("active");
//   prevImg.src = "images/Group 1 (1).svg";
//   prevBtn.style.transform = "rotate(180deg)";
// });

// initCarousel(
//   ".carousel-wrapper-spaces",
//   ".carousel-slide",
//   "#prev-Btn",
//   "#next-Btn"
// );

// // 3rd_vertical_carousel. || Vertical_Carousel. //
// const textItems = document.querySelectorAll(".carousel-text li");
// const image = document.getElementById("carousel-image");
// const indicate = document.querySelectorAll(".indicate");
// const currentSlide = document.getElementById("current-slide");
// const totalSlides = document.getElementById("total-slides");
// const images1 = [
//   "images/Rectangle 17.svg",
//   "images/image 10 (1).svg",
//   "images/image 5.png",
//   "images/Rectangle 11 (2).svg",
// ];
// totalSlides.textContent = images.length.toString().padStart(2, "0");
// function goToSlide(index) {
//   textItems.forEach((el) => el.classList.remove("active"));
//   indicate.forEach((el) => el.classList.remove("active"));
//   textItems[index].classList.add("active");
//   indicate[index].classList.add("active");
//   image.src = images1[index];
//   currentSlide.textContent = (index + 1).toString().padStart(2, "0");
// }
// textItems.forEach((item, index) => {
//   item.addEventListener("click", () => goToSlide(index));
// });

// // 4th_Carousel. || Height_Change_Carousel. //
// const lastWrapper = document.getElementById("carouselLastWrapper");
// let prevLastBtn = document.getElementById("prevLastBtn");
// let nextLastBtn = document.getElementById("nextLastBtn");
// let prevLastImg = prevLastBtn.querySelector("img");
// let nextLastImg = nextLastBtn.querySelector("img");
// let lastSlides = lastWrapper.children;
// let activeIndex = 1;
// function resetLastButtons() {
//   prevLastBtn.classList.remove("active");
//   nextLastBtn.classList.remove("active");
//   prevLastImg.src = "images/arr-sil-left.svg";
//   nextLastImg.src = "images/arr-sil-right.png";
//   prevLastBtn.style.transform = "none";
//   nextLastBtn.style.transform = "none";
// }
// function setRunSlide() {
//   Array.from(lastSlides).forEach((lastSlides, i) => {
//     lastSlides.classList.toggle("active", i === activeIndex);
//   });
// }
// function prevLastSlide() {
//   lastWrapper.insertBefore(
//     lastWrapper.lastElementChild,
//     lastWrapper.firstElementChild
//   );
//   setRunSlide();
//   resetLastButtons();
//   prevLastBtn.classList.add("active");
//   prevLastImg.src = "images/Group 1 (1).svg";
//   prevLastBtn.style.transform = "rotate(180deg)";
// }
// function nextLastSlide() {
//   lastWrapper.appendChild(lastWrapper.firstElementChild);
//   setRunSlide();
//   resetLastButtons();
//   nextLastBtn.classList.add("active");
//   nextLastImg.src = "images/Group 1 (1).svg";
// }
// document.getElementById("nextLastBtn").addEventListener("click", nextLastSlide);
// document.getElementById("prevLastBtn").addEventListener("click", prevLastSlide);
// setRunSlide();

// // 5th_Carousel. || Auto_Carousel. //
// (function () {
//   const carousel = document.getElementById("carousel");
//   const track = document.getElementById("track");
//   let slides = Array.from(track.children);
//   const slidesToShow = 6;
//   const autoplayInterval = 2500;
//   let slideWidth = 0;
//   function setSizes() {
//     const containerWidth = carousel.clientWidth - 32;
//     const totalGap = 12 * (slidesToShow - 1);
//     slideWidth = Math.floor((containerWidth - totalGap) / slidesToShow);   
//     slides.forEach((s) => (s.style.width = slideWidth + "px"));
//   }
//   function moveNext() {
//     let firstSlide = track.firstElementChild;
//     track.appendChild(firstSlide);
//     slides = Array.from(track.children);
//   }
//   function movePrev() {
//     let lastSlide = track.lastElementChild;
//     track.insertBefore(lastSlide, track.firstElementChild);
//     slides = Array.from(track.children);
//   }
//   function startAuto() {
//     setInterval(() => {
//       moveNext();
//     }, autoplayInterval);
//   }
//   window.addEventListener("resize", setSizes);
//   setSizes();
//   startAuto();
// })();

// //6rd Carousel. || Blue_Carousel. //
// function initCarousel(wrapperClass, slideClass, prevBtnClass, nextBtnClass) {
//   let wrapper = document.querySelector(wrapperClass);
//   let slides = document.querySelectorAll(slideClass);
//   let prevBtn = document.querySelector(prevBtnClass);
//   let nextBtn = document.querySelector(nextBtnClass);
//   let prevImg = prevBtn.querySelector("img");
//   let nextImg = nextBtn.querySelector("img");

//   function setActiveSlide() {
//     slides[0].classList.add("active");
//   }
//   setActiveSlide();
//   function resetButtons() {
//     prevBtn.classList.remove("active");
//     nextBtn.classList.remove("active");
//     prevImg.src = "images/arr-sil-left.svg";
//     nextImg.src = "images/arr-sil-right.png";
//     prevBtn.style.transform = "none";
//     nextBtn.style.transform = "none";
//   }

//   nextBtn.addEventListener("click", function () {
//     let firstSlide = wrapper.firstElementChild;
//     wrapper.appendChild(firstSlide);
//     slides = document.querySelectorAll(slideClass);
//     setActiveSlide();
//     resetButtons();
//     nextBtn.classList.add("active");
//     nextImg.src = "images/Group 1 (1).svg";
//   });
//   prevBtn.addEventListener("click", function () {
//     let lastSlide = wrapper.lastElementChild;
//     wrapper.insertBefore(lastSlide, wrapper.firstElementChild);
//     slides = document.querySelectorAll(slideClass);
//     setActiveSlide();
//     resetButtons();
//     prevBtn.classList.add("active");
//     prevImg.src = "images/Group 1 (1).svg";
//     prevBtn.style.transform = "rotate(180deg)";
//   });
// }
// initCarousel(
//   ".carousel-wrapper-reviews",
//   ".carousel-wrapper-reviews .carousel-slide",
//   "#prev-reviews",
//   "#next-reviews"
// );

// ButtonColorChange.
// document.addEventListener("DOMContentLoaded", function () {
//   let buttons = document.querySelectorAll(".button-background-change");
//   let columns = document.querySelectorAll(".column-background-change");
//   buttons.forEach(function (button, idx) {
//     let column = columns[idx];
//     button.addEventListener("mouseover", function () {
//       button.style.backgroundColor = "white";
//       button.style.color = "#FF5722";
//       if (column) {
//         column.style.backgroundColor = "#FF5722";
//         column.style.color = "white";
//       }
//     })
//     button.addEventListener("mouseout", function () {
//       button.style.backgroundColor = "";
//       button.style.color = "";
//       if (column) {
//         column.style.backgroundColor = "";
//         column.style.color = "";
//       }
//     });
//   });
// });

// window.addEventListener("resize", updateAllCarousels);
// // Initial call
// updateAllCarousels();
