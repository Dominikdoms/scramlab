import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {GetRecipes} from "../RestApi/recipes";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

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
    const [open, setOpen] = React.useState(true);
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



    return (
        <section style={{
            marginLeft:200,
            marginTop:40
        }}>


        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    action={
                    <IconButton
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <CloseIcon style={{
                            color:"#ffffff"
                        }}
                        >

                        </CloseIcon>

                    </IconButton>
                } severity="info">Masz juz {recipes.length} przepisy, niezle !</Alert>
            </Collapse>
            <Collapse in={open}>

                <Alert
                    action={
                        <IconButton
                            onClick={() => {
                                setOpen(false)
                            }
                            }

                        >
                            <CloseIcon style={{
                                color:"#ffffff"
                            }}
                            >

                            </CloseIcon>

                        </IconButton>

                    }

                    severity="warning">Pamietaj, aby dodac plan !</Alert> </Collapse>
            <Collapse in={open}>

                <Alert
                    action={
                        <IconButton
                            onClick={() => {
                                setOpen(false)
                            }
                            }
                        >
                            <CloseIcon style={{
                                color:"#ffffff"
                            }}
                            >

                            </CloseIcon>
                        </IconButton>
                    }

                    severity="success">Swietnie, ze jestes! Udanego planowania i smacznego!
                    :)</Alert>
            </Collapse>
        </div>
        </section>
    );
}