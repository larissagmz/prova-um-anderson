const text =
    " O Novembro Azul é uma campanha dedicada à conscientizaçãosobre o câncer de próstata. O objetivo é alertar os homens sobre a importância da prevenção e do diagnóstico precoce, incentivando o cuidado com a saúde.";

const textElement = document.querySelector(".description-section__description");

let index = 0;

const typeText = () => {
    textElement.textContent = text.slice(0, index++);

    if (index <= text.length) {
        setTimeout(typeText, 40);
    } else {
        setTimeout(() => {
            index = 0;
            typeText();
        }, 2000);
    }
};

const header = document.querySelector(".header");
const trigger = document.querySelector(".img-header");

let isFixed = false;

window.addEventListener("scroll", () => {
    const rect = trigger.getBoundingClientRect();

    if (rect.bottom <= 0 && !isFixed) {
        header.classList.remove("slide-up");
        header.classList.add("fixed", "slide-down");
        isFixed = true;
    } else if (rect.bottom > 0 && isFixed) {
        header.classList.remove("slide-down");
        header.classList.add("slide-up");

        // Espera a animação terminar
        setTimeout(() => {
            header.classList.remove("fixed", "slide-up");

            // 🔥 RESET: garante que ele fique visível no topo quando não estiver fixo
            header.style.transform = "none";
            header.style.opacity = "1";
        }, 400); // mesmo tempo da animação
        isFixed = false;
    }
});
typeText();
