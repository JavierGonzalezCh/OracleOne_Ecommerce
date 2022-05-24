const catchUsers = () => fetch("http://localhost:3000/Users").then(response=>response.json());

export const userServices ={
    catchUsers
}