import React from 'react';
import {useState} from 'react'
import './formToSave.scss'
import {dark} from "@material-ui/core/styles/createPalette";

export const FormToSave = () => {
    const [newsletter, setNewsletter] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = [];
        if (newsletter < 1) newError.push(1)
        if (newError.length !== 0) {
            setError("Musi być przynajmniej jeden znak")
        } else {
            setError("")

            const news = {
                newsletter
            }

            fetch('http://localhost:3000/food', {
                method: "POST",
                body: JSON.stringify(news),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            setNewsletter("")
        }
    }

    return (
        <section className={"formToSave"}>
            <div className={"container formToSave_container"}>
                <h3 className={"container_header"}>Lorem ipsum dolor sit amet</h3>
                <form onSubmit={handleSubmit} className={"formToSave_form"}>
                    <input className={"formToSave_input"}
                           type="text"
                           value={newsletter}
                           placeholder={error ? error : "newsletter"}
                           onChange={event => setNewsletter(event.target.value)}
                    />
                    <button type={"submit"} className={"formToSave_btn"}>Lorem</button>
                </form>
            </div>
        </section>
    )
}