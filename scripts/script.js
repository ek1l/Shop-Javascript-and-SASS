// Ativar o botão de pesquisar produtos

const activeSearchButton = document.querySelector(".active-search");
let buttonActivated = document.querySelector(".search-input");

const activeSearch = () => buttonActivated.classList.toggle("active");

activeSearchButton.addEventListener("click", activeSearch);

// RENDERIZAR PRODUTOS

let products = [
  {
    imgProduct: "pc1.jpeg",
    nameProduct: "PC GAMER I5",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE GTX 1650 4GB, 16GB DDR4, SSD 480GB",
    offerProduct: "de R$4,998",
    priceProduct: "R$3,579",
  },

  {
    imgProduct: "cadeiragamer.jpg",
    nameProduct: "Cadeira Gamer DT3",
    descriptionProduct: "CADEIRA GAMER DT3 SPORTS NERO V2, PRETO, 13747-2",
    offerProduct: "de R$1,999",
    priceProduct: "R$1,499",
  },

  {
    imgProduct: "gabinete.jpg",
    nameProduct: "Gabinete Gamer",
    descriptionProduct:
      "GABINETE GAMER LIAN LI LANCOOL 216, RGB, LATERAL DE VIDRO, COM 2 FANS, BRANCO, LANCOOL216RW",
    offerProduct: "de R$1,499",
    priceProduct: "R$1,125",
  },

  {
    imgProduct: "watercooler.jpg",
    nameProduct: "Water Cooler",
    descriptionProduct:
      "WATER COOLER NZXT KRAKEN 240 RGB, DISPLAY LCD, 240MM, BRANCO, RL-KR240-W1",
    offerProduct: "de R$1,529",
    priceProduct: "R$1,529",
  },

  {
    imgProduct: "monitor.jpg",
    nameProduct: "Monitor Gamer",
    descriptionProduct:
      "MONITOR PROFISSIONAL PICHAU PERSEUS P1, MINILED, 27 POL., IPS, QHD, 1MS, 165HZ, FREESYNC, HDMI/DP, PG-PRSPML-BL01",
    offerProduct: "de R$3.999",
    priceProduct: "R$4,705",
  },

  {
    imgProduct: "placadevideo.jpg",
    nameProduct: "Placa de vídeo mancer RTX 2060",
    descriptionProduct:
      "PLACA DE VIDEO MANCER RTX 2060 SUPER HEIMDALL SS, 8GB, GDDR6, 256-BIT, MCR-RTX2060SUPER-HMDLLSS",
    offerProduct: "de R$2.035",
    priceProduct: "R$1,729",
  },

  {
    imgProduct: "processador.jpg",
    nameProduct: "PROCESSADOR AMD RYZEN 5 5600X",
    descriptionProduct:
      "PROCESSADOR AMD RYZEN 5 5600X, 6-CORE, 12-THREADS, 3.7GHZ (4.6GHZ TURBO), CACHE 35MB, AM4, 100-100000065BOX",
    offerProduct: "de R$1,339",
    priceProduct: "R$1,249",
  },

  {
    imgProduct: "placamae.jpg",
    nameProduct: "Placa mae ASUS PRIME A520M-E",
    descriptionProduct:
      "PLACA MAE ASUS PRIME A520M-E DDR4 SOCKET AM4 CHIPSET AMD, PRIME A520M-E",
    offerProduct: "de R$2,354",
    priceProduct: "R$2,180",
  },

  {
    imgProduct: "processadorintel.jpg",
    nameProduct: "PROCESSADOR INTEL CORE I3-10100F",
    descriptionProduct:
      "PROCESSADOR INTEL CORE I3-10100F, 4-CORE, 8-THREADS, 3.6GHZ (4.3GHZ TURBO), CACHE 6MB, LGA1200, BX8070110100F",
    offerProduct: "de R$3,587",
    priceProduct: "R$2,599",
  },

  {
    imgProduct: "memoria.jpg",
    nameProduct: "MEMORIA NOTEBOOK CORSAIR VENGEANCE, 16GB",
    descriptionProduct:
      "MEMORIA NOTEBOOK CORSAIR VENGEANCE, 16GB (2X8GB), DDR4, 2400MHZ, C16, PRETA, CMSX16GX4M2A2400C16",
    offerProduct: "de R$4,998",
    priceProduct: "R$3,579",
  },

  {
    imgProduct: "placadevideo4080.jpg",
    nameProduct: "PLACA DE VIDEO ASUS GEFORCE RTX 4080 ROG STRIX",
    descriptionProduct:
      "PLACA DE VIDEO ASUS GEFORCE RTX 4080 ROG STRIX OC, 16GB, GDDR6X, 256-BIT, ROG-STRIX-RTX4080-O16G-WHITE",
    offerProduct: "de R$11,761",
    priceProduct: "R$9,997",
  },

  {
    imgProduct: "pcgamercorsair.jpg",
    nameProduct: "COMPUTADOR PICHAU GAMER CORSAIR ICUE, AMD RYZEN 5 5600X",
    descriptionProduct:
      "COMPUTADOR PICHAU GAMER CORSAIR ICUE, AMD RYZEN 5 5600X, GEFORCE RTX 3060 TI 8GB, 16GB DDR4, SSD 1TB + SSD M.2 480GB",
    offerProduct: "de R$10,823",
    priceProduct: "R$9,199",
  },

  {
    imgProduct: "cadeiraergonomica.jpg",
    nameProduct: "CADEIRA OFFICE PREMIUM ZINNIA DALIA",
    descriptionProduct:
      "CADEIRA OFFICE PREMIUM ZINNIA DALIA, PRETO, ZNO-DLA-BK01",
    offerProduct: "de R$2,446",
    priceProduct: "R$2,079",
  },

  {
    imgProduct: "kitgamer.jpg",
    nameProduct: "COMPUTADOR MANCER GAMER THOR IV, AMD RYZEN 5 4600G",
    descriptionProduct:
      "COMPUTADOR MANCER GAMER THOR IV, AMD RYZEN 5 4600G, 16GB DDR4, SSD 240GB + CADEIRA GAMER + MONITOR 24 + KIT PERIFÉRICOS",
    offerProduct: "de R$2,939",
    priceProduct: "R$3,458",
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
    createButtonCartProduct.dataset.index = products.indexOf(e);

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
  transformNumberCountCart++;
  countCart.textContent = transformNumberCountCart;
  verifyProducExist();
}

function subtrairCartProduct() {
  transformNumberCountCart--;
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

function notification() {
  const notification = document.querySelector(".notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

let itensCart = [];

function notificationExisteProductCart() {
  const notification = document.querySelector(".notificationExistProduct");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

function addItemsToCart(index) {
  const product = products[index];
  const isProductInCart = itensCart.some(
    (item) => item.nameProduct === product.nameProduct
  );
  if (!isProductInCart) {
    itensCart.push(product);
    somarCartProduct();
    notification();
    console.log(itensCart);
  } else {
    notificationExisteProductCart();
  }
}

function removeItemFromCart(index) {
  itensCart.splice(index, 1);
  renderProductsListDois();
  verifyProducExist();
  totalPrice();
}

function renderProductsListDois() {
  let getContainerCart = document.querySelector(".container-carrinho");
  getContainerCart.innerHTML = "";
  itensCart.forEach((e, index) => {
    let criarDivItemsCart = document.createElement("div");
    criarDivItemsCart.classList.add("items-cart");

    let criarDivDafotoDoProduto = document.createElement("div");
    criarDivDafotoDoProduto.classList.add("foto-product");

    let criarImg = document.createElement("img");
    criarImg.src = e.imgProduct;

    let criarDivDoNomeEDescricao = document.createElement("div");
    criarDivDoNomeEDescricao.classList.add("nome-desc");

    let criarNomeProduto = document.createElement("h3");
    criarNomeProduto.textContent = e.nameProduct;
    let criarDescricao = document.createElement("p");
    criarDescricao.textContent = e.descriptionProduct;

    let criarDivPrice = document.createElement("div");
    criarDivPrice.classList.add("price");

    let criarPreco = document.createElement("h2");
    criarPreco.textContent = e.priceProduct;

    let createDivButtonDelete = document.createElement("div");
    createDivButtonDelete.classList.add("button-remove");

    let createButtonDelete = document.createElement("button");
    createButtonDelete.textContent = "X";
    createButtonDelete.classList.add("excluir");

    createButtonDelete.addEventListener("click", () => {
      removeItemFromCart(index);
      subtrairCartProduct();
    });

    criarDivItemsCart.appendChild(criarDivDafotoDoProduto);
    criarDivDafotoDoProduto.appendChild(criarImg);
    criarDivItemsCart.appendChild(criarDivDoNomeEDescricao);
    criarDivDoNomeEDescricao.appendChild(criarNomeProduto);
    criarDivDoNomeEDescricao.appendChild(criarDescricao);
    criarDivDoNomeEDescricao.appendChild(criarDivPrice);
    criarDivItemsCart.appendChild(createDivButtonDelete);
    createDivButtonDelete.appendChild(createButtonDelete);
    criarDivPrice.appendChild(criarPreco);
    getContainerCart.appendChild(criarDivItemsCart);
  });

  totalPrice();
  naoTemProdutos();
}

function fecharAbrirCartLateral() {
  const containerProducts = document.querySelector(".carrinho");
  containerProducts.classList.toggle("active");
}

buttonCart.forEach((e) => {
  e.addEventListener("click", () => {
    const index = parseInt(e.dataset.index);

    addItemsToCart(index);
    renderProductsListDois();
    console.log(totalPrice());
  });
});

cart.addEventListener("click", fecharAbrirCartLateral);

countCart.addEventListener("click", fecharAbrirCartLateral);

function totalPrice() {
  let precoTotalDosItens = itensCart.reduce(
    (sum, e) =>
      sum + parseFloat(e.priceProduct.replace("R$", "").replace(",", ".")),
    0
  );
  let innerTotalPrice = document.querySelector(".total-price");
  innerTotalPrice.textContent = `R$${precoTotalDosItens.toFixed(3)}`;

  return precoTotalDosItens;
}

function naoTemProdutos() {
  const naoTemProdutosCart = document.querySelector(".nao-tem-produtos");
  if (itensCart.length === 0) {
    naoTemProdutosCart.style.display = "block";
  } else {
    naoTemProdutosCart.style.display = "none";
  }
}

const fecharCarrinhoLateral = document.querySelector("#fecharCartLateral");
const carrinho = document.querySelector(".carrinho");
fecharCarrinhoLateral.addEventListener("click", () =>
  carrinho.classList.remove("active")
);
