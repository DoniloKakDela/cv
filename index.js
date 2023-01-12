const photoSlideImages = document.querySelectorAll(
  ".main__photo .main__slider img"
);
let currentImageId = 0;

setInterval(function () {
  photoSlideImages[currentImageId].style.zIndex = 0;
  photoSlideImages[currentImageId].style.opacity = 0;

  currentImageId =
    currentImageId === photoSlideImages.length - 1 ? 0 : currentImageId + 1;

  photoSlideImages[currentImageId].style.zIndex = 1;
  photoSlideImages[currentImageId].style.opacity = 1;
}, 3000);

function toggleBurger() {
  const burger = document.querySelector(".main__menu");
  burger.classList.toggle("active");
}
