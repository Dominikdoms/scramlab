import React, {useState} from "react"
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {updateUser} from "../RestApi/names";

const useStyles = makeStyles((theme) =>
    createStyles({
        form: {
            display: "flex",
            width: 100,
            flexDirection: "column",
            height: 200,
            justifyContent: "center"
        },
        form2: {
            display: "flex",
            justifyContent: "center"

        },

        input: {
            width: 250,
            height: 40,
            marginTop: 20
        },

        button: {
            height: 40,
            backgroundColor: "#FF6600",
            fontWeight: "bold",
            border: "none",
            color: "#ffffff",
            marginTop: 20,
        }


    })
);


const AddName = () => {
    const classes = useStyles();
    const [name, setName] = useState("")

    const handleClick = () => {
        updateUser(name)

    }
    const handleChangeInput=(event)=>{
        setName(event.target.value)
    }
    return (
        <section style={{
            width: "100%"

        }}>
            <form className={classes.form2} action="#" method="post">
                <div className={classes.form}>
                    <div style={{
                        paddingRight: 30
                    }}>
                        <input onChange={handleChangeInput} value={name} className={classes.input} type="text" name="name"
                               placeholder="tutaj wpisz jak masz na imie"
                               maxLength="80" required/></div>
                    <button onClick={handleClick} className={classes.button}>Gotowe!</button>
                </div>
            </form>
        </section>

    )
}


export default AddName;