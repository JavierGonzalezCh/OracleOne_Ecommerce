const catchProducts = () => fetch("https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Products").then(response=>response.json());

const catchProduct = (id) => fetch(`https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Products/${id}`).then(response=>response.json());

const createProduct = (img,name,price,type,description) => {
    return (
        fetch("https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Products",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({img,name,price,type,description})
    }))
}

const uploadProduct = (img,name,price,type,description,id) => {
    return (
        fetch(`https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Products/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({img,name,price,type,description,id})
    }))
}

const deleteProducts = (id) =>{
    return (
        fetch(`https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Products/${id}`,{
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