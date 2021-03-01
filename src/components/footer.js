import React from "react"
import {createStyles, makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) =>
    createStyles({
        footer: {
            width: "100%",
            backgroundColor: "#4a4a49",
            color: "#FFFFFF",
            fontFamily: "'Open Sans', sans-serif",
            paddingTop: 30,

        },
        allLinks: {
            listStyle: "none"
        },
        miniFooter: {
            height: 50,
            backgroundColor: "#4a4a49",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        },
        columns: {
            width: "20%",
            display: "inline-block",
            fontSize: "1.2rem"

        },
        buttons: {
            backgroundColor: "#FF9100",
            color: "#FFFFFF",
            border: "none",
            height: 30,
            width: 70
        },
        icons: {
            display: "flex",
            justifyContent: "space-around",
            width: 150,
            marginTop: 20

        },
        input: {
            height: 30,

        }
    })
);
const MainFooter = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className="footer">
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <div className={classes.columns}>
                        <ul className={classes.allLinks}>
                            <h3>Lorem ipsum dolor</h3>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua.
                            </li>
                        </ul>
                    </div>


                    <div className={classes.columns}>
                        <ul>
                            <h3>Lorem ipsum dolor</h3>
                            <li>consectetur adipiscing elit</li>
                            <li>sed do eiusmod tempor</li>
                            <li>incidunt ut labore</li>
                            <li>et dolore magna aliqua</li>
                        </ul>
                    </div>

                    <div className={classes.columns}>
                        <ul className={classes.allLinks}>
                            <h3>Lorem ipsum dolor</h3>
                            <li>
                                <form action="#" method="post">
                                    <input className={classes.input} type="email" name="email" placeholder="Email*"
                                           maxLength="80" required/>
                                    <button className={classes.buttons}>Lorem</button>

                                </form>
                            </li>
                            <div className={classes.icons}>
                                <FacebookIcon></FacebookIcon>
                                <TwitterIcon></TwitterIcon>
                                <InstagramIcon></InstagramIcon>
                            </div>
                            <li>
                                <a href="#" title="Address,State,Country,Pincode"><i
                                    className="fa fa-map-marker"></i></a>
                                <a href="#"><i className="fa fa-phone"></i></a>
                                <a href="#"><i className="fa fa-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.miniFooter}>
                Copyright © <span style={{
                color: "#FF9100"
            }}>ZaplanujJedzonko.pl</span>
            </div>
        </footer>


    )
}


export default MainFooter;