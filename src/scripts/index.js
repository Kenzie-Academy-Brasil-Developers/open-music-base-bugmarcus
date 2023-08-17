import { products, categories } from "./productsData.js";

function createCard(product) {
  const card = document.createElement("li");
  card.classList.add("card__album");

  const img = document.createElement("img");
  img.src = product.img;
  img.classList.add("card__album-image");
  card.appendChild(img);

  const info = document.createElement("div"); // Criar a div info
  info.classList.add("card__album-info"); // Adicionar classe para a div info

  const bandInfo = document.createElement("p");
  bandInfo.textContent = `${product.band} - ${product.year}`;
  bandInfo.classList.add("card__album-band");
  info.appendChild(bandInfo);

  const albumTitle = document.createElement("h2");
  albumTitle.textContent = product.title;
  albumTitle.classList.add("card__album-title");
  info.appendChild(albumTitle);

  const priceContainer = document.createElement("span");
  const priceText = document.createElement("p");
  priceText.textContent = `R$ ${product.price.toFixed(2)}`;
  priceText.classList.add("card__album-price");
  const buyButton = document.createElement("button");
  buyButton.textContent = "Comprar";
  buyButton.classList.add("card__album-button");
  priceContainer.appendChild(priceText);
  priceContainer.appendChild(buyButton);
  info.appendChild(priceContainer);

  card.appendChild(info); // Adicionar a div info ao card

  return card;
}

function renderButtons(array) {
  const buttonsList = document.querySelector(".filter__genre-list");

  array.forEach((item) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = item;
    listItem.appendChild(button);
    buttonsList.appendChild(listItem);
  });
}

function renderCards(array) {
  const albumsList = document.querySelector(".card__albums-list");
  albumsList.innerHTML = ""; // Limpar a lista antes de renderizar os cards

  array.forEach((product) => {
    const cardElement = createCard(product);
    albumsList.appendChild(cardElement);
  });
}

function addEventListeners(categories, products) {
  const buttonsList = document.querySelector(".filter__genre-list");
  const priceInput = document.querySelector(".filter__range");
  const priceDisplay = document.querySelector("#until-price");

  let selectedCategoryIndex = 0; // Inicialmente, "Todos" selecionado
  let maxPrice = parseFloat(priceInput.value); // Valor inicial do input

  buttonsList.addEventListener("click", (event) => {
    const selectedCategory = event.target.textContent;
    selectedCategoryIndex = categories.indexOf(selectedCategory);

    const filteredProducts = products.filter((product) => {
      if (
        selectedCategoryIndex === 0 ||
        product.category === selectedCategoryIndex
      ) {
        return product.price <= maxPrice;
      }
      return false;
    });

    renderCards(filteredProducts);
  });

  priceInput.addEventListener("input", () => {
    maxPrice = parseFloat(priceInput.value);
    priceDisplay.textContent = `Até R$ ${maxPrice.toFixed(2)}`;

    const filteredProducts = products.filter((product) => {
      if (
        selectedCategoryIndex === 0 ||
        product.category === selectedCategoryIndex
      ) {
        return product.price <= maxPrice;
      }
      return false;
    });

    renderCards(filteredProducts);
  });
}

renderButtons(categories);
renderCards(products);
addEventListeners(categories, products);
