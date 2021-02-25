import React from "react";
import {useState} from "react";
import './add-recipe.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

export const AddRecipe = () => {
    const [nameRecipe, setNameRecipe] = useState('');
    const [description, setDescription] = useState('');

    const [instruction, setInstruction] = useState('');
    const [ingredients, setIngredients] = useState('');

    const [showInstruction, setShowInstruction] = useState([]);
    const [showIngredients, setShowIngredients] = useState([]);

    const [error, setError] = useState('')

    //odświerzanie listy Instrukcji
    const instructionShow = () => {
        setShowInstruction(prevState => [...prevState, instruction])
        setInstruction('')
    }
    //odświerzanie listy Składników
    const ingredientsShow = () => {
        setShowIngredients(prevState => [...prevState, ingredients])
        setIngredients('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newError = [];
        if (nameRecipe < 1) newError.push(1)
        if (description < 1) newError.push(1)
        if (showInstruction < 1) newError.push(1)
        if (showIngredients < 1) newError.push(1)
        if (newError.length !== 0) {
            setError("Musi być przynajmniej jeden znak")
        } else {
            setError('')

            const newRecipe = {
                nameRecipe,
                description,
                showInstruction,
                showIngredients
            }

            fetch("http://localhost:3000/food", {
                method: "POST",
                body: JSON.stringify(newRecipe),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                })

            setNameRecipe('')
            setDescription('')
        }
    }

    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <div className='form_header-container'>
                    <h2 className='new_recipe-title'>Nowy Przepis</h2>
                    <button className='form_save'>Zapisz i zamknij</button>
                </div>
                <div>
                    <div className='recipe_details'>
                        <div className='recipe_name'>
                            <label>
                                Nazwa Przepisu:
                                <input type="text"
                                       value={nameRecipe}
                                       onChange={e => setNameRecipe(e.target.value)}/>
                                <p style={{color: "red"}}>{error}</p>
                            </label>
                        </div>
                        <div className='recipe_description'>
                            <label>
                                Opis przepisu:
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    cols="60" rows="5"/>
                                <p style={{color: "red"}}>{error}</p>
                            </label>
                        </div>
                    </div>
                    <div className='display_container'>
                        <label>
                            <h2 className='display_instruction'>INSTRUKCJE:</h2>
                            <input type="text"
                                   value={instruction}
                                   onChange={e => setInstruction(e.target.value)}/>
                            <span className='plus_icon' onClick={instructionShow}>
                                <FontAwesomeIcon icon={faPlusSquare}/>
                            </span>
                        </label>

                        <label>
                            <h2 className='display_ingredients'>SKŁADNIKI:</h2>
                            <input type="text"
                                   value={ingredients}
                                   onChange={e => setIngredients(e.target.value)}
                            />
                            <span className='plus_icon' onClick={ingredientsShow}>
                            <FontAwesomeIcon icon={faPlusSquare}/>
                            </span>
                        </label>
                    </div>
                </div>
            </form>
            <div className='recipe_display'>
                <section className='recipe_display-instruction'>
                    <ul>
                        {showInstruction.map((instruction, index) => (
                            <li key={index}>{index + 1}. {instruction}</li>
                        ))}
                    </ul>
                    <p style={{color: "red"}}>{error}</p>
                </section>
                <section className='recipe_display-ingredients'>
                    <ul>
                        {showIngredients.map((ingredients, index) => (
                            <li className='dotted' key={index}>*{ingredients}</li>
                        ))}
                    </ul>
                    <p style={{color: "red"}}>{error}</p>
                </section>
            </div>
        </div>
    )
}