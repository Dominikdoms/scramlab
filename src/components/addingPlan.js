import React, {useEffect, useState} from "react"
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import idx from 'idx';
import {GetRecipes} from "../RestApi/recipes";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {parse} from "@fortawesome/fontawesome-svg-core";


// const classes = useStyles();
// const [recipes, setRecipes] = useState("");
//
// useEffect(async () => {
//         const newRecipe = await GetRecipes()
//         console.log(newRecipe)
//         if (newRecipe) {
//             setRecipes(newRecipe)
//         }
//     }
//     , []
// )

const useStyles = makeStyles((theme) =>
    createStyles({
        section: {
            margin: "auto",
            width: "100%"

        },
        newPlanDiv1: {
            display: "flex",
            borderBottomWidth: 1,
            borderColor: 'grey',
            borderStyle: 'solid',
            justifyContent: "space-around",
            paddingBottom: 5

        },
        newPlanDiv2: {
            display: "flex",

        },

        newPlanDiv3: {
            display: "flex",
            marginTop: 50
        },

        newPlanHeader: {
            color: "#FF9100",
            fontSize: 40,
            fontFamily: `"Open Sans", sans-serif`
        },
        newPlanHeader2: {
            color: "Grey",
            fontSize: 40,
            fontFamily: `"Open Sans", sans-serif`,
        },

        newPlanButton: {
            backgroundColor: "#FF9100",
            border: "none",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#ffffff",
            fontWeight: "bold",


        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            display: "inline-block",
            padding: 10

        },
        formDiv: {
            display: "flex",
            justifyContent: "space-between"
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },

    })
);
const AddingPlan = ({onRecipesAdd}) => {
    const [recipes, setRecipes] = useState("");
    const [description, setDescription] = useState("")
    const [week, setWeek] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipes || !description || !week) {
            window.alert("Formularz jest blednie wypelniony")
        } else {
            const newRecipes = {
                recipes,
                description,
                week,
            }
            fetch('http://localhost:3000/schedules', {
                method: 'POST',
                body: JSON.stringify(newRecipes),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((recipes) => {
                    if (typeof onRecipesAdd === 'function') {
                        onRecipesAdd(recipes);
                    }
                });
        }
        ;
    }
    const classes = useStyles()
    return (

        <section className={classes.section}>
            <form onSubmit={handleSubmit}>
                <div style={{
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <div className={classes.newPlanDiv1}>
                        <h4 className={classes.newPlanHeader}>NOWY PLAN</h4>
                        <button className={classes.newPlanButton}>Zapisz i zamknij</button>
                    </div>
                    <div className={classes.newPlanDiv2}>
                        <h4 className={classes.newPlanHeader2}>Nazwa planu</h4>
                        <input style={{
                            width: 800,
                            height: 20,
                            marginLeft: 560
                        }}
                               placeholder="Nazwij swoj plan"
                               value={recipes}
                               onChange={(e) => setRecipes(e.target.value)}
                        />

                    </div>
                    <div className={classes.newPlanDiv2}>
                        <h4 className={classes.newPlanHeader2}>Opis planu</h4>
                        <input style={{
                            width: 800,
                            height: 90,
                            marginLeft: 600
                        }}
                               placeholder="Opisz swoj plan"
                               value={description}
                               onChange={(e)=>setDescription(e.target.value)}
                        />

                    </div>
                    <div className={classes.newPlanDiv2}>
                        <h4 className={classes.newPlanHeader2}>Numer tygodnia</h4>
                        <input style={{
                            width: 20,
                            height: 20,
                            marginLeft: 500,
                            marginTop: 20

                        }}
                               placeholder="Nr"
                               value={week}
                               onChange={(e)=>setWeek(parseInt(e.target.value))}
                        />

                    </div>
                </div>
            </form>
        </section>
    )
}


export default AddingPlan;