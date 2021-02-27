

import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {GetRecipes} from "../RestApi/recipes";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [recipes, setRecipes] = useState([]);
    console.log(recipes)
    useEffect(async () => {
            const newRecipe = await GetRecipes()
            console.log(newRecipe)
            if (newRecipe) {
                setRecipes(newRecipe)
            }

        }
        , []
    )
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>

                <Alert onClose={handleClose}  severity="info">Masz juz {recipes.length} przepisy, niezle !</Alert>
                <Alert onClose={handleClose} severity="warning">Pamietaj, aby dodac plan !</Alert>

                <Alert onClose={handleClose} severity="success">Swietnie, ze jestes! Udanego planowania i smacznego! :)</Alert>

        </div>
    );
}