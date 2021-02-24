import React from "react";
import {useState, useEffect} from "react";
import './recipe-list.scss'


export const RecipeList = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setRecipes(data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(recipes);


    return (
        <div className={"recipe-list_container"}>
            <header className={"recipe-list_header"}>
                <h2>LISTA PRZEPISÓW</h2>
                <span>❎</span>
            </header>
            <div className={"recipe-list_feature"}>
                <div className={"recipe-list_names"}>
                    <p>ID</p>
                    <p>NAZWA</p>
                    <p>OPIS</p>
                </div>
                <p className={"recipe-list_action"}>AKCJE</p>
            </div>
            <div className={"recipe-list_items"}>
                <ul>
                    {recipes.map(recipe => (
                        <section key={recipe.id}>
                            <li>{recipe.id} {recipe.nameRecipe} {recipe.description}</li>
                        </section>
                    ))}

                </ul>
            </div>
        </div>
    )
}