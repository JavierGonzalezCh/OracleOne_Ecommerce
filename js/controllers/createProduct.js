import { productServices } from "../services/productServices.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const image = document.querySelector("[data-img]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const type = document.querySelector("[data-type]").value;
    const description = document.querySelector("[data-description]").value;
    productServices
        .createProduct(image,name,price,type,description)
        .then(()=>{
            window.location.href = "/layouts/all.html";
        })
        .catch((err)=>console.log(err))
});