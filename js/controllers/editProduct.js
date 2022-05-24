import { productServices } from "../services/productServices.js";

const form = document.querySelector("[data-form]");
const url = new URL(window.location)
const id = url.searchParams.get("id")

function catchData() {
    const img = document.querySelector("[data-img]");
    const name = document.querySelector("[data-name]");
    const type = document.querySelector("[data-type]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");

    productServices.catchProduct(id)
        .then(producto =>{
            img.value = producto.img;
            name.value = producto.name;
            type.value = producto.type;
            price.value = producto.price;
            description.value = producto.description;
        })
}

catchData();

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const name = document.querySelector("[data-name]").value;
    const type = document.querySelector("[data-type]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    productServices.uploadProduct(img,name,price,type,description,id)
        .then(()=>{
            window.location.href = "/Front-End/layouts/all.html";
        })
})