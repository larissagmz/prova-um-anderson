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

        setTimeout(() => {
            header.classList.remove("fixed", "slide-up");

            header.style.transform = "none";
            header.style.opacity = "1";
        }, 400);
        isFixed = false;
    }
});

const sendComment = () => {
    const button = document.querySelector("#send");
    const textarea = document.querySelector("textarea");

    button.disabled = true;

    textarea.addEventListener("input", () => {
        button.disabled = textarea.value.trim() === "";
    });

    button.addEventListener("click", (e) => {
        if (textarea.value.trim() !== "") {
            renderComment();
            textarea.value = "";
            button.disabled = true;
        }
    });
};

const renderComment = () => {
    const text = document.querySelector("textarea").value;
    const list = document.querySelector(".div-list__duvidas-list");

    const li = document.createElement("li");
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    const divContent = document.createElement("div");
    const divUser = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");

    // Configuração das classes
    li.className = "duvidas-list__duvidas";
    fig.className = "img-men";
    divContent.className = "duvidas__content";
    divUser.className = "duvidas__content-user";
    deleteBtn.className = "btn-delete-comment";

    h4.innerText = "Anderson Yoshiaki";
    img.src = "./img/anderson.jpeg";
    p.innerText = text;
    deleteBtn.innerText = "Excluir";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.append(fig, divContent);
    fig.append(img);
    divContent.append(divUser, deleteBtn);
    divUser.append(h4, p);

    list.prepend(li);
};

const doe = document.querySelector(".button-doe");
doe.addEventListener("click", (e) => {
    navigator.clipboard.writeText("ffdfdbfdlsSLfbsd");

    alert("pix copiado");
});
typeText();
sendComment();
