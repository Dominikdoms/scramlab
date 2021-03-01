import React from 'react';
import './8.1-plan-list-display.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import Popup from 'reactjs-popup';
import {AddRecipe} from "./add-recipe";
import AddingPlan from "./addingPlan";
import {createStyles, makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         section: {
//             margin: "auto",
//             width: "100%"
//
//         },
//         newPlanDiv1: {
//             display: "flex",
//             borderBottomWidth: 1,
//             borderColor: 'grey',
//             borderStyle: 'solid',
//             justifyContent: "space-around",
//             paddingBottom: 5
//
//         },
//         newPlanDiv2: {
//             display: "flex",
//
//         },
//
//         newPlanDiv3: {
//             display: "flex",
//             marginTop: 50
//         },
//
//         newPlanHeader: {
//             color: "#FF9100",
//             fontSize: 40,
//             fontFamily: `"Open Sans", sans-serif`
//         },
//         newPlanHeader2: {
//             color: "Grey",
//             fontSize: 40,
//             fontFamily: `"Open Sans", sans-serif`,
//         },
//
//         newPlanButton: {
//             backgroundColor: "#FF9100",
//             border: "none",
//             fontFamily: `"Open Sans", sans-serif`,
//             color: "#ffffff",
//             fontWeight: "bold",
//
//
//         },
//         formControl: {
//             margin: theme.spacing(1),
//             minWidth: 120,
//             display: "inline-block",
//             padding: 10
//
//         },
//         formDiv: {
//             display: "flex",
//             justifyContent: "space-between"
//         },
//         selectEmpty: {
//             marginTop: theme.spacing(2),
//         },
//
//     })
// );

export const PlanListDisplay = () => {

    const API = "http://localhost:3000/schedules"
    //aktualne dane pobrane z API
    const [plans, setPlans] = useState([]);

    //dzięki temu wiemy czy tekst jest edytowany, czy nie
    const [planEditing, setPlanEditing] = useState(null)

    //zebrany tekst z inpupa i textarea
    const [editingPlanDescription, setEditingPlanDescription] = useState('')
    const [editingPlanName, setEditingPlanName] = useState('')

    console.log(editingPlanName);

    const newPlan = {
        recipes: editingPlanName,
        description: editingPlanDescription
    }

    useEffect(() => {
        fetch(`${API}`)
            .then(response => response.json())
            .then((data) => {
                setPlans(data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletePlan = (id) => {
        fetch(`${API}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id))
            })
    }

    const editPlan = (id) => {
        //przypisanie zaaktualizowanych obiektów do zmiennej
        plans.map((plan) => {
            if (plan.id === id) {
                plan.description = editingPlanDescription
                plan.name = editingPlanName

                fetch(`${API}/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify(newPlan),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
            }
            return plan;
        })
        setPlanEditing(null)
        setEditingPlanDescription('')
        setEditingPlanName('')
    }

    // const classes = useStyles()

    return (
        <div className='plan__list-container'>
            <div className='plan__list-header'>
                <h2 className='plan__list-header-title'>Lista planów</h2>
                <Popup className={"popup-content"}
                       trigger={
                           <button className={"plan__list-add-btn"}>
                               <FontAwesomeIcon className={"faPlusSquare"}
                                                icon={faPlusSquare}/></button>
                       } position="absolute">
                    <AddingPlan/>
                </Popup>
            </div>
            <div className='plan__list-content'>
                <div className='plan__list-content-header'>
                    <ul className='plan__list-content-header-list'>
                        <li className='plan__list-content-header-list-id'>id</li>
                        <li className='plan__list-content-header-list-name'>nazwa</li>
                        <li className='plan__list-content-header-list-description'>opis</li>
                        <li className='plan__list-content-header-list-week'>tydzień</li>
                        <li className='plan__list-content-header-list-actions'>akcje</li>
                    </ul>
                </div>
                <div className='plan__list-content-body'>
                    <ul className={"plan-list_all"}>
                        {plans.map(plan => (
                            <section className={"plan-list_display"} key={plan.id}>
                                {/*<li className={"plan-list_items"}>*/}
                                <span className={"plan-list_id"}>
                                {plan.id}
                                </span>
                                <span className={"plan-list_name"}>
                                    {planEditing === plan.id ? (
                                        <input
                                            type="text"
                                            placeholder={"Nazwa"}
                                            value={editingPlanName}
                                            onChange={(e) => setEditingPlanName(e.target.value)}
                                        />
                                    ) : (
                                        <p>{plan.recipes}</p>
                                    )}
                                    </span>
                                <span className={"plan-list_description"}>
                                    {planEditing === plan.id ? (
                                        <textarea placeholder={"Opis"}
                                                  className={"textarea"}
                                                  onChange={(e) => setEditingPlanDescription(e.target.value)}
                                                  value={editingPlanDescription}
                                        />
                                    ) : <p>{plan.description}</p>}
                                </span>
                                <span className={"plan-list_weekNumber"}>
                                {plan.week}
                                </span>
                                <span className={"plan-list_action-items"}>
                                    <span>{/*EDIT*/}
                                        {planEditing === plan.id ?
                                            (<button style={{border: "none", backgroundColor: "unset"}}
                                                     onClick={() => editPlan(plan.id)}>✅</button>)
                                            :
                                            //ustawia ID wpisu do planEditing
                                            (<button style={{border: "none", backgroundColor: "unset"}}
                                                     onClick={() => setPlanEditing(plan.id)}>
                                                <FontAwesomeIcon
                                                    className={"edit__icon"}
                                                    icon={faEdit}/>
                                            </button>)}
                                    </span>
                                    {/*TRASH*/}
                                    <span onClick={() => deletePlan(plan.id)}>
                                        <FontAwesomeIcon
                                            className={"trash__icon"}
                                            icon={faTrashAlt}/>
                                    </span>
                                </span>
                                {/*</li>*/}
                            </section>
                        ))}
                    </ul>
                    {/*MAPOWANIE DANYCH*/}
                    {/*<FontAwesomeIcon className='edit__icon' icon={faEdit}/>*/}
                    {/*<FontAwesomeIcon className='trash__icon' icon={faTrashAlt}/>*/}
                </div>
            </div>
        </div>
    )
}