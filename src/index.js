const text =
    " O Novembro Azul é uma campanha dedicada à conscientizaçãosobre o câncer de próstata. O objetivo é alertar os homens sobre a importância da prevenção e do diagnóstico precoce, incentivando o cuidado com a saúde.";

const textElement = document.querySelector(".description-section__description");

let index = 0;

const typeText = () => {
    textElement.textContent = text.slice(0, index++);

    if (index <= text.length) {
        setTimeout(typeText, 40); // velocidade de digitação
    } else {
        setTimeout(() => {
            index = 0;
            typeText(); // reinicia o loop
        }, 2000); // tempo parado no final
    }
};

typeText();
