const inputNumber = document.querySelector("#input-number");
const searchForm = document.querySelector("#search_form");
const messageContainer = document.querySelector("#message__container");
const h2Container = document.querySelector("#message__container h2");
const h3Container = document.querySelector("#message__container h3");
const ulContainer = document.querySelector("#message__container ul");
const imgContainer = document.querySelector("#message__container img");
const pContainer = document.querySelector("#message__container p");

class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const pizzas = [
  {
    id: 1,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/466/products/copia-de-pizza-mozarella1-f27baa3e01887f9e6416299067526593-640-0.jpg",
    nombre: "Muzzarella",
    ingredientes: ["Queso muzzarella", "Tomate"],
    precio: 1200,
  },
  {
    id: 2,
    img: "https://www.doctoradriancormillot.com/cor4578/wp-content/uploads/2014/04/pizza-napolitana.jpg",
    nombre: "Napolitana",
    ingredientes: [
      "Queso muzzarella",
      "Tomate",
      "Rodaja de tomate natural",
      "Ajo",
      "Perejil picado",
    ],
    precio: 1440,
  },
  {
    id: 3,
    img: "https://www.rebanando.com/uploads/media/5218-pizza-micro-jam-n-y-qu500x500.jpg?1393192374",
    nombre: "Jamon",
    ingredientes: ["Queso muzzarella", "Tomate", "Jamon"],
    precio: 1440,
  },
  {
    id: 4,
    img: "https://cocinerosargentinos.com/content/recipes/500x500/recipes.12050.jpeg",
    nombre: "Fugazzeta",
    ingredientes: ["Queso muzzarella", "Cebolla", "Aceitunas"],
    precio: 1440,
  },
  {
    id: 5,
    img: "https://www.receitasdemae.com.br/wp-content/uploads/2022/02/Pizza-de-calabresa.jpg",
    nombre: "Calabresa",
    ingredientes: ["Queso muzzarella", "Longaniza calabresa", "Tomate"],
    precio: 1500,
  },
  {
    id: 6,
    img: "https://www.clarin.com/img/2021/11/16/YcExTBfAe_340x340__1.jpg",
    nombre: "Jamon y morron",
    ingredientes: ["Queso muzzarella", "Jamon", "Morron", "Tomate"],
    precio: 1500,
  },
];
const changeColorBackground = () => {
  messageContainer.classList.add("color-change");
};

const changeColorBackgroundError = () => {
  messageContainer.classList.add("error-background");
};

const showError = (message) => {
  pContainer.textContent = message;
};

const borderError = () => {
  inputNumber.style.border = "1px solid #CF0A0A";
};

const clearError = () => {
  pContainer.textContent = "";
};

const clearPizza = () => {
  ulContainer.textContent = "";
  h2Container.textContent = "";
  h3Container.textContent = "";
  imgContainer.style.display = "none";
};

const clearBorderError = () => {
  inputNumber.style.border = "";
};

const clearBackgroundError = () => {
  messageContainer.classList.remove("error-background");
};

const findPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const renderResult = (pizza) => {
  if (!pizza) {
    showError("⛔ ID Incorrecto ⛔");
    changeColorBackgroundError();
    borderError();
    clearPizza();
    return;
  } else {
    const mostrarImg = (imgContainer.style.display = "flex");
    const ingredientes = pizza.ingredientes
      .map((pizza) => `<li>${pizza}</li>`)
      .join("");
    const renderAll =
      (ulContainer.innerHTML = `<h4>📄 Ingredientes:</h4> ${ingredientes}`);
    h2Container.textContent = `🍕 Pizza: ${pizza.nombre}`;
    h3Container.textContent = `💲 Precio: ${pizza.precio}`;
    imgContainer.src = `${pizza.img}`;
  }
  changeColorBackground();
  clearError();
  clearBackgroundError();
  clearBorderError();
};

const saveToLocalStorage = (card) => {
  localStorage.setItem("card", JSON.stringify(card));
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchedValue = inputNumber.value;

  if (!searchedValue) {
    showError("⛔ Se requiere un número ⛔");
    changeColorBackground();
    borderError();
    changeColorBackgroundError();
    clearPizza();
    return;
  }

  const searchedPizza = findPizza(Number(searchedValue));

  saveToLocalStorage(searchedPizza);
  renderResult(searchedPizza);
  searchForm.reset();
});

const getLocalStorage = JSON.parse(localStorage.getItem("card"));
renderResult(getLocalStorage);
