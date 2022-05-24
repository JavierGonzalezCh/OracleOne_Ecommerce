import { productServices } from "../services/productServices.js";

const url = new URL(window.location)
const id = url.searchParams.get("id")

productServices.catchProduct(id).then(product => {
    const section = document.querySelector("#product-details")
    const {img,name,price,description} = product   
    document.title = `${name} - Alura Geek`
    const details =
    `
        <img class="product-details-img" src="${img}" alt="Imagen Producto">
        <div class="product-details-content"> 
            <h1 class="title">${name}</h1>
            <p class="price">$${price},oo</p>
            <p class="description">${description}</p>
        </div>
    `
    section.innerHTML = details
    return section
})

productServices.catchProducts().then(products=>{
    const productId = url.searchParams.get("id")
    const galery = document.querySelector("#galery");
    let count = 0
    if (window.innerWidth >= 1300) {
        count = 6
    } else if ( window.innerWidth >= 1080) {
        count = 5
    } else {
        count = 4
    }
    for (let index = 0; index < count; index++) {
        const {id,img,name,price} = products[index];
        if (productId === id) {
            count ++
            continue   
        }
        const newProduct = 
        `
            <figure class="product" >
                <img class="product-img" src="${img}" alt="${name}">
                <figcaption class="product-name">${name}</figcaption>
                <p class="product-price">$ ${price},00</p>
                <a class="product-link" href="/layouts/product.html?id=${id}">Ver producto</a>
            </figure>
        `
        galery.innerHTML= galery.innerHTML + newProduct
    }
    return galery
})