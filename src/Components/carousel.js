import React from "react"
import ReactElasticCarousel from "react-elastic-carousel";
import Item from "../Styles/Item";
import {createMuiTheme, createStyles, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import clsx from "clsx";

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 1},
    {width: 1200, itemsToShow: 1},
];

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            width: "100%"
        },

        carouselHeader: {
            textAlign: "center"

        }
    })
);

const MainCarousel = () => {
    const classes = useStyles()
    return (
        <container>
            <ReactElasticCarousel breakPoints={breakPoints}>

                <Item>
                    <div
                    >
                        <h3
                            className={clsx(classes.carouselHeader)}>Lorem ipsum dolor sit amet
                        </h3>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </div>
                </Item>

                <Item>
                    <div>
                        <h3 className={classes.carouselHeader}>Lorem ipsum dolor sit amet
                        </h3>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </div>
                </Item>
                <Item>
                    <div>

                        <h3 className={classes.carouselHeader}>Lorem ipsum dolor sit amet
                        </h3>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </div>
                </Item>

            </ReactElasticCarousel>

        </container>

    )
}

export default MainCarousel;