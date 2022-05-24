import { productServices } from "../services/productServices.js";

const starwars = document.querySelector("#starwars");
const consoles = document.querySelector("#consoles");
const various = document.querySelector("#various");

productServices.catchProducts().then(products=>{
    if (window.innerWidth >= 1300) {
        productsByType(6,products)
    } else if ( window.innerWidth >= 1080) {
        productsByType(5,products)
    } else {
        productsByType(4,products)
    }
})
.catch(error => alert("Ha ocurrido un error al cargar los datos"))

function productsByType(max, products) {
    let productsDisplayed = [0,0,0]
        products.forEach(product => {
        if (product.type === "starwars" && productsDisplayed[0] < max) {
            const newProduct = showProduct(product.id,product.img,product.name,product.price);
            starwars.appendChild(newProduct);
            productsDisplayed[0] += 1;
        }
        if (product.type === "consoles"  && productsDisplayed[1] < max) {
            const newProduct = showProduct(product.id,product.img,product.name,product.price);
            consoles.appendChild(newProduct);
            productsDisplayed[1] += 1;
        }
        if (product.type === "various"  && productsDisplayed[2] < max) {
            const newProduct = showProduct(product.id,product.img,product.name,product.price);
            various.appendChild(newProduct);
            productsDisplayed[2] += 1;
        }
    });

}

function showProduct(id,img,name,price) {
    const figure = document.createElement("figure");
    figure.classList.add("product");
    const product = 
    `
        <img class="product-img" src="${img}" alt="${name}">
        <figcaption class="product-name">${name}</figcaption>
        <p class="product-price">$ ${price},00</p>
        <a class="product-link" href="/layouts/product.html?id=${id}">Ver producto</a>
    `
    figure.innerHTML = product;
    return figure
}