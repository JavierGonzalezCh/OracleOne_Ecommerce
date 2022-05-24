const catchUsers = () => fetch("https://my-json-server.typicode.com/JavierGonzalezCh/OracleOne_Ecommerce/Users").then(response=>response.json());

export const userServices ={
    catchUsers
}