import { productServices } from "../services/productServices.js";

const allProducts = document.querySelector("#allProducts")

productServices.catchProducts().then(products=>{
    products.forEach(product => {
        const {id,img,name,price} = product
        const newProduct = showProduct(id,img,name,price);
        allProducts.appendChild(newProduct)
    });
})
.catch(error => alert("Ha ocurrido un error al cargar los datos"))

function showProduct(id,img,name,price) {
    const figure = document.createElement("figure");
    figure.classList.add("product");
    const product = 
    `   
        <div>
            <input type="image" class="delete" id="delete${id}" src="/img/other/trash.png">
            <a class="edit" id="edit" href="/layouts/edit-product.html?id=${id}">
                <img src="/img/other/pen.png">
            </a>
            <img class="product-img" src="${img}" alt="${name}">
        </div>
        <figcaption class="product-name">${name}</figcaption>
        <p class="product-price">$ ${price},00</p>
        <a class="product-link" href="/layouts/product.html?id=${id}">Ver producto</a>
    `
    figure.innerHTML = product;
    const btnDelete = figure.querySelector(`#delete${id}`)
    btnDelete.addEventListener("click",() =>{
        productServices
            .deleteProducts(id)
            .then(res => console.log(res))
            .catch(err => alert(err))
    })

    return figure
}