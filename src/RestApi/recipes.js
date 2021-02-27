
const API = "http://localhost:3000/";


export const GetRecipes = async() => {
    const data = await fetch(`${API}recipes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return data.json()
}