import { userServices } from "../services/userServices.js";

console.log(userServices.catchUsers());

const loginForm = document.querySelector("#login");
const loginSubmit = document.querySelector("#loginSubmit");
const loginErrors = document.querySelector("#loginErrors");

loginSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    const formData = catchData(loginForm);
    let errors = validateLoginForm(formData);
    
    if(errors.length > 0){
        showError(errors,loginErrors);
    }
})

function catchData(form) {
    const formData = {
        email: form.loginEmail.value,
        password: form.loginPwd.value
    }
    return formData;
}

function validateLoginForm(formData){
    let errors = [];
    const emailRegex = /\S+@\S+\.\S+/;

    console.log(searchUser(formData));
    if (searchUser(formData) === "email") {
        errors.push("correo invalidos")
    }
    if(formData.email.length == 0 || formData.email.trim() === ""|| !emailRegex.test(formData.email)){
        errors.push("Ingrese un correo valido");
    }
    if(formData.password.length == 0 || formData.password.trim() === ""){
        errors.push("La contraseña no puede estar vacía");
    }
    
    return errors; 
}

function searchUser(formData){
    let autorized = false
    userServices.catchUsers().then( user => {
        console.log(user);
        if (user.email === formData.email && user.password === formData.password ) {
            autorized = true
        }
    })
    return autorized
}
function showError(errors, ul){
    ul.innerHTML = ""
    ul.classList.remove("hidden")
    errors.forEach((error)=>{
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}