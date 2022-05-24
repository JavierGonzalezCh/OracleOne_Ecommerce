const contactForm = document.querySelector("#contact");
const contactSubmit = document.querySelector("#contactSubmit");
const contactErrors = document.querySelector("#contactErrors");

contactSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    const formData = catchData(contactForm);
    let errors = validateContactForm(formData);
    
    if(errors.length > 0){
        showError(errors,contactErrors);
    }
})

function catchData(form) {
    const formData = {
        name: form.contactName.value,
        message: form.contactMessage.value
    }
    return formData; 
}

function validateContactForm(formData){
    let errors = [];

    if(formData.name.length == 0 || formData.name.trim() === ""){
        errors.push("El nombre no puede estar vacío");
    }
    if(formData.name.length > 40){
        errors.push("El nombre no puede tener mas de 50 caracteres");
    }
    if(formData.message.length == 0 || formData.message.trim() === ""){
        errors.push("El mensaje no puede estar vacío");
    }
    if(formData.message.length > 120){
        errors.push("El mensaje no puede tener mas de 120 caracteres");
    }
    
    return errors; 
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