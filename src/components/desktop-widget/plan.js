// import React from "react";
// import {useState} from "react";
// import Popup from "reactjs-popup";
// import {ReactComponent as Plus} from "../../icons/plus-square-regular.svg";
// import './desktop-widget.scss'
// export const Plan = () => {
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//
//         const newFood = {
//             plan,
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
//
//         setPlan('');
//
//     }
//
//
//     return(
//         <Popup className={"popup-content"}
//                trigger={
//                    <div className={"widgets"}>
//                        <Plus className={"icon"}/>
//                        <p className={"wigdet-text"}>plan</p>
//                    </div>
//                } position="center">
//             <form onSubmit={e => handleSubmit(e)}>
//                     <textarea
//                         className={"popup-content_textarea"}
//                         value={plan}
//                         onChange={e => setPlan(e.target.value)}/>
//                 <button>zatwierdź</button>
//             </form>
//         </Popup>
//     )
// }