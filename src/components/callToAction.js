import React from 'react'
import './callToAction.scss'
import {BrowserRouter, Link, useHistory} from "react-router-dom";


export const CallToAction = () => {
    const history = useHistory();
    const handleClick = e =>{
        e.preventDefault()

        history.push("/")
    }

    return (
            <section className={"toAction"}>
                <div className={"container"}>
                    <div className={"toAction_container"}>
                        <h3 className={"toAction_header"}>Lorem ipsum dolor sit amet</h3>
                        <p className={"toAction_text"}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <button className={"toAction_btn"} onClick={handleClick}>Link</button>

                </div>
            </section>

    )
}