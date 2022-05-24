const catchProducts = () => fetch("http://localhost:3000/Products").then(response=>response.json());

const catchProduct = (id) => fetch(`http://localhost:3000/Products/${id}`).then(response=>response.json());

const createProduct = (img,name,price,type,description) => {
    return (
        fetch("http://localhost:3000/Products",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({img,name,price,type,description})
    }))
}

const uploadProduct = (img,name,price,type,description,id) => {
    return (
        fetch(`http://localhost:3000/Products/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({img,name,price,type,description,id})
    }))
}

const deleteProducts = (id) =>{
    return (
        fetch(`http://localhost:3000/Products/${id}`,{
            method: "DELETE"
    })) 
}


export const productServices ={
    catchProducts,
    catchProduct,
    createProduct,
    uploadProduct,
    deleteProducts
}