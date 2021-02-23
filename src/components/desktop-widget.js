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
    const [plan, setPlan]= useState('')
    const [shopping, setShopping] = useState('')
    // const
    // console.log(recipe)
    // console.log(plan)
    console.log(shopping)

    const handleSubmit = () => {

    }

    return (
        <section className={"widgets-container"}>
            <Popup trigger={
                <div className={"widgets"}>
                    <Plus className={"icon"}/>
                    <p className={"wigdet-text"}>przepis</p>
                </div>
            } position="right center">
                <form onSubmit={e => handleSubmit(e)}>
                    <textarea value={recipe} onChange={e => setRecipe(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>

            <Popup trigger={
                <div className={"widgets"}>
                    <Plus className={"icon"}/>
                    <p className={"wigdet-text"}>plan</p>
                </div>
            } position="right center">
                <form>
                    <textarea value={plan} onChange={e => setPlan(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>

            <Popup trigger={
                <div className={"widgets"}>
                    <Plus className={"icon"}/>
                    <p className={"wigdet-text"}>zakupy</p>
                </div>
            } position="right center">
                <form>
                    <textarea value={shopping} onChange={e => setShopping(e.target.value)}/>
                    <button>zatwierdź</button>
                </form>
            </Popup>
        </section>
    )
}