import React from 'react';
import {useState} from 'react'
import './formToSave.scss'

export const FormToSave = () => {
    const [textToSave, setTextToSave] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

    //    ...signing up for newsletter
    }

    return (
        <section className={"formToSave"}>
            <div className={"container formToSave_container"}>
                <h3 className={"container_header"}>Lorem ipsum dolor sit amet</h3>
                <form onSubmit={handleSubmit} className={"formToSave_form"}>
                    <input className={"formToSave_input"}
                           type="text"
                           value={textToSave}
                           onChange={event => setTextToSave(event.target.value)}
                    />
                    <button type={"submit"} className={"formToSave_btn"}>Lorem</button>
                </form>
            </div>
        </section>
    )
}