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


    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [instructionError, setInstructionError] = useState('')
    const [ingredientsError, setIngredientsError] = useState('')

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

        let nameError = '';
        let descriptionError = '';
        let instructionError = '';
        let ingredientsError = '';

        const errorMessage = "Musi być przynajmniej jeden znak";

        if (nameRecipe.length < 2) {
            nameError = errorMessage
            setNameError(nameError);
        }
        if (description.length < 2) {
            descriptionError = errorMessage
            setDescriptionError(descriptionError)
        }
        if (showInstruction.length < 1) {
            instructionError = errorMessage
            setInstructionError(instructionError)
        }
        if (showIngredients.length < 1) {
            ingredientsError = errorMessage
            setIngredientsError(ingredientsError)
        }
        if (nameRecipe.length >= 1 && description.length >= 1 && (showInstruction.length >= 1) && (showIngredients.length >= 1)) {
            setNameError('')
            setDescriptionError('')
            setInstructionError('')
            setIngredientsError('')

            const newRecipe = {
                nameRecipe,
                description,
                showInstruction,
                showIngredients
            }

            fetch("http://localhost:3000/recipes", {
                method: "POST",
                body: JSON.stringify(newRecipe),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then((data) => {
                })

            setNameRecipe('')
            setDescription('')
            setShowInstruction([])
            setShowIngredients([])
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
                                <p style={{color: "red"}}>{nameError}</p>
                            </label>
                        </div>
                        <div className='recipe_description'>
                            <label>
                                Opis przepisu:
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    cols="60" rows="5"/>
                                <p style={{color: "red"}}>{descriptionError}</p>
                            </label>
                        </div>
                    </div>
                    <div className='display_container'>
                        <label>
                            <h2 className='display_instruction'>INSTRUKCJE:</h2>
                            <textarea className={"display_instruction-textarea"}
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
                    <p style={{color: "red"}}>{instructionError}</p>
                </section>
                <section className='recipe_display-ingredients'>
                    <ul>
                        {showIngredients.map((ingredients, index) => (
                            <li className='dotted' key={index}>*{ingredients}</li>
                        ))}
                    </ul>
                    <p style={{color: "red"}}>{ingredientsError}</p>
                </section>
            </div>
        </div>
    )
}