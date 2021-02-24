import React from "react";
import {useState} from "react";
import './desktop-widget.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as Plus} from '../icons/plus-square-regular.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import {NewRecipe} from './add-new-recipe/new-recipe'


export const DesktopWidgets = () => {

    const [recipe, setRecipe] = useState('')
    const [plan, setPlan] = useState('')
    const [shopping, setShopping] = useState('')


    const handleSubmitRecipe = (e) => {
        e.preventDefault()

        const newFood = {
            recipe
        }

        fetch('http://localhost:3000/food', {
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
                console.log(data)
            })
        setRecipe('');
    }

    const handleSubmitPlan = (e) => {
        e.preventDefault()

        const newFood = {
            plan
        }

        fetch('http://localhost:3000/food', {
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
                console.log(data)
            })
        setPlan('');
    }

    const handleSubmitShopping = (e) => {
        e.preventDefault()

        const newFood = {
            shopping
        }

        fetch('http://localhost:3000/food', {
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
                console.log(data)
            })
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
                <form onSubmit={e => handleSubmitRecipe(e)}>
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
                <form onSubmit={e => handleSubmitPlan(e)}>
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
                <form onSubmit={e => handleSubmitShopping(e)}>
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


//
//
// import React from "react";
// import {useState} from "react";
// import './desktop-widget.scss'
// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// // import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
// import {ReactComponent as Plus} from '../icons/plus-square-regular.svg'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
//
// // import {Recipe} from "./desktop-widget/recipe";
//
//
// export const DesktopWidgets = () => {
//
//     const [recipe, setRecipe] = useState('')
//     const [plan, setPlan] = useState('')
//     const [shopping, setShopping] = useState('')
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//
//         const newFood = {
//             recipe,
//             plan,
//             shopping
//         }
//
//         fetch('http://localhost:3000/food', {
//             method: "POST",
//             body: JSON.stringify(newFood),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 // if (typeof ... === "function") {
//                 //     ...(data)
//                 //     }
//                 console.log(data)
//             })
//         setRecipe('');
//         setPlan('');
//         setShopping('');
//     }
//
//     return (
//         <section className={"widgets-container"}>
//             <Popup className={"popup-content"}
//                    trigger={
//                        <div className={"widgets"}>
//                            <Plus className={"icon"}/>
//                            <p className={"wigdet-text"}>przepis</p>
//                        </div>
//                    } position="center">
//                 <form onSubmit={e => handleSubmit(e)}>
//                     <textarea
//                         className={"popup-content_textarea"}
//                         value={recipe}
//                         onChange={e => setRecipe(e.target.value)}/>
//                     <button>zatwierdź</button>
//                 </form>
//             </Popup>
//
//             <Popup className={"popup-content"}
//                    trigger={
//                        <div className={"widgets"}>
//                            <Plus className={"icon"}/>
//                            <p className={"wigdet-text"}>plan</p>
//                        </div>
//                    } position="center">
//                 <form onSubmit={e => handleSubmit(e)}>
//                     <textarea
//                         className={"popup-content_textarea"}
//                         value={plan}
//                         onChange={e => setPlan(e.target.value)}/>
//                     <button>zatwierdź</button>
//                 </form>
//             </Popup>
//
//             <Popup className={"popup-content"}
//                    trigger={
//                        <div className={"widgets"}>
//                            <Plus className={"icon"}/>
//                            <p className={"wigdet-text"}>zakupy</p>
//                        </div>
//                    } position="center">
//                 <form onSubmit={e => handleSubmit(e)}>
//                     <textarea
//                         className={"popup-content_textarea"}
//                         value={shopping}
//                         onChange={e => setShopping(e.target.value)}/>
//                     <button>zatwierdź</button>
//                 </form>
//             </Popup>
//         </section>
//     )
// }