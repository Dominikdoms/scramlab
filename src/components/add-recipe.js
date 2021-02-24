import React from "react";
import {useState} from "react";

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
        <div style={{height: 600, width: 960, backgroundColor: "lightblue"}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Nowy Przepis</h2>
                    <button>Zapisz i zamknij</button>
                </div>
                <div>
                    <div style={{display: "flex", flexDirection: "column", marginBottom: 30}}>
                        <label>
                            Nazwa Przepisu:
                            <input type="text"
                                   value={nameRecipe}
                                   onChange={e => setNameRecipe(e.target.value)}/>
                            <p style={{color: "red"}}>{error}</p>
                        </label>
                        <label>
                            Opis przepisu:
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                cols="60" rows="5"/>
                            <p style={{color: "red"}}>{error}</p>
                        </label>
                    </div>
                    <div>
                        <label>
                            INSTRUKCJE:
                            <input type="text"
                                   value={instruction}
                                   onChange={e => setInstruction(e.target.value)}/>
                            <span onClick={instructionShow}>❎</span>
                        </label>

                        <label>
                            SKŁADNIKI:
                            <input type="text"
                                   value={ingredients}
                                   onChange={e => setIngredients(e.target.value)}
                            />
                            <span onClick={ingredientsShow}>❎</span>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: "flex"}}>
                <section>
                    <ul>
                        {showInstruction.map((instruction, index) => (
                            <li key={index}>{index + 1}. {instruction}</li>
                        ))}
                    </ul>
                    <p style={{color: "red"}}>{error}</p>
                </section>
                <section style={{paddingLeft: 30}}>
                    <ul>
                        {showIngredients.map((ingredients, index) => (
                            <li key={index}>{index + 1}. {ingredients}</li>
                        ))}
                    </ul>
                    <p style={{color: "red"}}>{error}</p>
                </section>
            </div>
        </div>
    )
}