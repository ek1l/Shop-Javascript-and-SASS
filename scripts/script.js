// Ativar o botão de pesquisar produtos

const activeSearchButton = document.querySelector(".active-search");
let buttonActivated = document.querySelector(".search-input");

const activeSearch = () => buttonActivated.classList.toggle("active");

activeSearchButton.addEventListener("click", activeSearch);

// RENDERIZAR PRODUTOS

let products = [
  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },

  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de 4,998,80",
    priceProduct: "R$3,579,90",
  },
];

function renderProductsList() {
  let getContainerProducts = document.querySelector(".container-products");
  products.forEach((e) => {
    let createProduct = document.createElement("div");
    createProduct.classList.add("product");

    let createDivImageProduct = document.createElement("div");
    createDivImageProduct.classList.add("image-product");

    let createImageProduct = document.createElement("img");
    createImageProduct.src = e.imgProduct;

    let createDivNameProduct = document.createElement("div");
    createDivNameProduct.classList.add("name-product");

    let createNameProduct = document.createElement("h2");
    createNameProduct.textContent = e.nameProduct;

    let createDescriptionProduct = document.createElement("p");
    createDescriptionProduct.textContent = e.descriptionProduct;

    let createDivPriceProduct = document.createElement("div");
    createDivPriceProduct.classList.add("price-product");

    let createOfferProduct = document.createElement("h2");

    let createOfferProductSpan = document.createElement("span");
    createOfferProductSpan.textContent = e.offerProduct;

    let createPorOfferProduct = document.createElement("h3");
    createPorOfferProduct.textContent = "por";

    let createRealPriceProduct = document.createElement("h1");
    createRealPriceProduct.textContent = e.priceProduct;

    let createDivBuyCart = document.createElement("div");
    createDivBuyCart.classList.add("buy-cart");

    let createButtonBuyProduct = document.createElement("button");
    createButtonBuyProduct.classList.add("buy");
    createButtonBuyProduct.textContent = "Buy";

    let createButtonCartProduct = document.createElement("button");
    createButtonCartProduct.classList.add("cart");
    createButtonCartProduct.textContent = "Add to cart";

    createProduct.appendChild(createDivImageProduct);
    createDivImageProduct.appendChild(createImageProduct);
    createProduct.appendChild(createDivNameProduct);
    createDivNameProduct.appendChild(createNameProduct);
    createDivNameProduct.appendChild(createDescriptionProduct);
    createProduct.appendChild(createDivPriceProduct);
    createDivPriceProduct.appendChild(createOfferProduct);
    createOfferProduct.appendChild(createOfferProductSpan);
    createDivPriceProduct.appendChild(createPorOfferProduct);
    createDivPriceProduct.appendChild(createRealPriceProduct);
    createProduct.appendChild(createDivBuyCart);
    createDivBuyCart.appendChild(createButtonBuyProduct);
    createDivBuyCart.appendChild(createButtonCartProduct);
    getContainerProducts.appendChild(createProduct);
  });
}
renderProductsList();

// CARRINHO

const countCart = document.querySelector(".count-items");

let transformNumberCountCart = Number(countCart.textContent);

const cart = document.querySelector("#cart");

let buttonCart = document.querySelectorAll(".cart");

function somarCartProduct() {
  transformNumberCountCart += 1;
  countCart.textContent = transformNumberCountCart;
  verifyProducExist();
}

function verifyProducExist() {
  if (transformNumberCountCart > 0) {
    countCart.style.display = "block";
  } else {
    countCart.style.display = "none";
  }
}

verifyProducExist();

buttonCart.forEach((e) => {
  e.addEventListener("click", somarCartProduct);
});
