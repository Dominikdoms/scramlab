import React from "react";
import {useState, useEffect} from "react";
import './recipe-list.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

export const RecipeList = () => {
    const API = "http://localhost:3000/recipes"
    //aktualne dane pobrane z API
    const [recipes, setRecipes] = useState([])

    //dzięki temu wiemy czy tekst jest edytowany, czy nie
    const [recipeEditing, setRecipeEditing] = useState(null)

    //zebrany tekst z inpupa i textarea
    const [editingDescription, setEditingDescription] = useState('')
    const [editingName, setEditingName] = useState('')

    console.log(editingName);

    const newRecipe = {
        nameRecipe: editingName,
        description: editingDescription
    }

    useEffect(() => {
        fetch(`${API}`)
            .then(response => response.json())
            .then((data) => {
                setRecipes(data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteRecipe = (id) => {
        fetch(`${API}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id))
            })
    }

    const editRecipe = (id) => {
        //przypisanie zaaktualizowanych obiektów do zmiennej
        recipes.map((recipe) => {
            if (recipe.id === id) {
                recipe.description = editingDescription
                recipe.nameRecipe = editingName

                fetch(`${API}/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify(newRecipe),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
            }
            return recipe
        })
        setRecipeEditing(null)
        setEditingDescription('')
        setEditingName('')
    }

    return (
        <div className={"recipe-list_container"}>
            <header className={"recipe-list_header"}>
                <h2>LISTA PRZEPISÓW</h2>
                <span><FontAwesomeIcon className={"faPlusSquare"}
                                       icon={faPlusSquare}/></span>
            </header>
            <div className={"recipe-list_feature"}>
                <div className={"recipe-list_names"}>
                    <p>ID</p>
                    <p className={"p-name"}>NAZWA</p>
                    <p>OPIS</p>
                </div>
                <p className={"recipe-list_action"}>AKCJE</p>
            </div>
            <div>
                <ul className={"recipe-list_all"}>
                    {recipes.map(recipe => (
                        <section key={recipe.id}>
                            <li className={"recipe-list_items"}>
                                <span className={"recipe-list_id"}>
                                {recipe.id}
                            </span>
                                <span className={"recipe-list_name"}>
                                    {recipeEditing === recipe.id ? (
                                        <input
                                            type="text"
                                            placeholder={"Nazwa"}
                                            value={editingName}
                                            onChange={(e) => setEditingName(e.target.value)}
                                        />
                                    ) : (
                                        <p>{recipe.nameRecipe}</p>
                                    )}
                                </span>
                                <span className={"recipe-list_description"}>
                                    {recipeEditing === recipe.id ? (
                                        <textarea placeholder={"Opis"}
                                                  className={"textarea"}
                                                  onChange={(e) => setEditingDescription(e.target.value)}
                                                  value={editingDescription}
                                        />
                                    ) : <p>{recipe.description}</p>}
                                </span>
                                <span className={"recipe-list_action-items"}>
                                    <span>{/*EDIT*/}
                                        {recipeEditing === recipe.id ?
                                            (<button style={{border: "none", backgroundColor: "unset"}}
                                                     onClick={() => editRecipe(recipe.id)}>✅</button>)
                                            :
                                            //ustawia ID wpisu do recipeEditing
                                            (<button style={{border: "none", backgroundColor: "unset"}}
                                                     onClick={() => setRecipeEditing(recipe.id)}>
                                                <FontAwesomeIcon
                                                    className={"iconEdit"}
                                                    icon={faEdit}/>
                                            </button>)}
                                    </span>
                                    {/*TRASH*/}
                                    <span onClick={() => deleteRecipe(recipe.id)}>
                                        <FontAwesomeIcon
                                            className={"iconTrash"}
                                            icon={faTrashAlt}/>
                                    </span>
                                </span>
                            </li>
                        </section>
                    ))}
                </ul>
            </div>
        </div>
    )
}



