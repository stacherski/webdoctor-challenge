const navButton = document.querySelector("[data-mobile-nav-button]");
const mainNav = document.querySelector("[data-main-nav]");

const miniBasketButton = document.querySelector("[data-minibasket-button]");
const miniBasket = document.querySelector("[data-minibasket]");

const sizeButtons = document.querySelectorAll("[data-size]");
const addToBasketButton = document.querySelector("[data-addtobasket-button]");

let size = undefined;
sizeButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    sizeButtons.forEach((el) => {
      el.removeAttribute("data-selected");
    });
    size = e.target.dataset.size;
    e.target.setAttribute("data-selected", "selected");
  });
});

let miniBasketOpen = false;
navButton.addEventListener("click", () => {
  mainNav.toggleAttribute("data-open");
});

miniBasketButton.addEventListener("click", () => {
  miniBasket.toggleAttribute("data-open");
  miniBasketOpen = !miniBasketOpen;
});

addToBasketButton.addEventListener("click", () => {
  if (size != undefined) {
    //create new product line
    let product = document.createElement("div");
    product.style.display = "flex";
    product.style.justifyContent = "space-between";
    product.textContent = `T-shirt, BLACK, size: ${size}`;
    //create remove button
    let removeButton = document.createElement("span");
    removeButton.textContent = "x";
    removeButton.setAttribute("data-remove", "remove");
    product.appendChild(removeButton);
    removeButton.addEventListener("click", function () {
      this.parentElement.remove();
    });
    miniBasket.appendChild(product);

    if (miniBasketOpen === false) {
      miniBasket.toggleAttribute("data-open");
      miniBasketOpen = !miniBasketOpen;
    }
    sizeButtons.forEach((el) => {
      el.removeAttribute("data-selected");
    });
  } else {
    alert("Select size first");
  }
});
