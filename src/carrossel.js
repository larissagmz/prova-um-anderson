const scrollLeftButton = document.querySelector("#scroll-left");
const scrollRightButton = document.querySelector("#scroll-right");
const carousel = document.querySelector("#carousel");
const carouselContent = document.querySelector("#carousel-content");

let scrollAmount = 0;
const scrollStep = 600;

function updateButtonVisibility() {
    const maxScroll = carouselContent.scrollWidth - carousel.offsetWidth;

    if (scrollAmount <= 0) {
        scrollLeftButton.style.display = "none";
        carousel.style.setProperty("--show-left-gradient", "0");
    } else {
        scrollLeftButton.style.display = "block";
        carousel.style.setProperty("--show-left-gradient", "1");
    }

    if (scrollAmount >= maxScroll) {
        scrollRightButton.style.display = "none";
        carousel.style.setProperty("--show-right-gradient", "0");
    } else {
        scrollRightButton.style.display = "block";
        carousel.style.setProperty("--show-right-gradient", "1");
    }
}

scrollLeftButton.addEventListener("click", () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtonVisibility();
});

scrollRightButton.addEventListener("click", () => {
    const maxScroll = carouselContent.scrollWidth - carousel.offsetWidth;
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtonVisibility();
});

updateButtonVisibility();
