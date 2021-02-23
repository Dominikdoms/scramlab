import React from "react";
import {useState} from "react";
import './desktop-widget.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as Plus} from '../icons/plus-square-regular.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const DesktopWidget = () => {

    const [recipe, setRecipe] = useState('')
    const [plan, setPlan] = useState('')
    const [shopping, setShopping] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const newFood = {
            recipe,
            plan,
            shopping
        }

        fetch('http://localhost:3001/food', {
            method: "POST",
            body: JSON.stringify(newFood),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then((data) => {
                // if (typeof ... === "function") {
                //     ...(data)
                //     }
            })
        setRecipe('');
        setPlan('');
        setShopping('');
    }

    return (
        <section className={"widgets-container"}>
            <Popup className={"popup-content"}
                   trigger={
                       <div className={"widgets"}>
                           <Plus className={"icon"}/>
                           <p className={"wigdet-text"}>przepis</p>
                       </div>
                   } position="center">
                <form onSubmit={e => handleSubmit(e)}>
                    <textarea
                        className={"popup-content_textarea"}
                        value={recipe}
                        onChange={e => setRecipe(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>

            <Popup className={"popup-content"}
                   trigger={
                       <div className={"widgets"}>
                           <Plus className={"icon"}/>
                           <p className={"wigdet-text"}>plan</p>
                       </div>
                   } position="center">
                <form onSubmit={e => handleSubmit(e)}>
                    <textarea
                        className={"popup-content_textarea"}
                        value={plan}
                        onChange={e => setPlan(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>

            <Popup className={"popup-content"}
                   trigger={
                       <div className={"widgets"}>
                           <Plus className={"icon"}/>
                           <p className={"wigdet-text"}>zakupy</p>
                       </div>
                   } position="center">
                <form onSubmit={e => handleSubmit(e)}>
                    <textarea
                        className={"popup-content_textarea"}
                        value={shopping}
                        onChange={e => setShopping(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>
        </section>
    )
}