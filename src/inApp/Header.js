import React from 'react'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink, BrowserRouter,
} from 'react-router-dom';
import Why from "./Why";
import {MainView} from "../components/main-view";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import AddingPlan from "../components/addingPlan";


const Header = () => {


    return (
        <>
        <header className={"header"}>

            <div className={"header__container"}>
                <h1 className={"header__pagetitle"}>
                    <span className={"header__pagetitle__part1"}>
                        Zaplanuj
                    </span>
                    <span className={"header__pagetitle__part2"}>
                        Jedzonko
                    </span>
                </h1>
                <div className={"header__menu"}>
                    <Link to={"/eatingPlan"}>
                    <span className={"header__menu__element"}>
                        ZAPLANUJ POSIŁKI!
                    </span>
                        </Link>
{/*                    <Popup style={{position: "absolute",*/}
{/*top: 0, left: 0*/}
{/*                    }} className={"popup-content-header"} position={"center center"}*/}
{/*                           trigger={*/}
{/*                               <button className={"plan__list-add-btn"}>*/}
{/*                                   <span className={"header__menu__element"}>*/}
{/*                                       ZAPLANUJ POSIŁKI!*/}
{/*                                   </span>*/}
{/*                                   </button>*/}
{/*                           }>*/}
{/*                        <MainView/>*/}
{/*                    </Popup>*/}
                    <span className={"header__menu__element"}>
                        DLACZEGO WARTO?
                    </span>
                    <span className={"header__menu__element"}>
                        O MNIE
                    </span>
                    <span className={"header__menu__element"}>
                        KONTAKT
                    </span>
                </div>
            </div>


        </header>
    <Switch>
        <Route exact path="/"/>
        <Route exact  path="/eatingPlan">
            {/*<Why/>*/}
            <MainView/>
        </Route>
    </Switch>
    </>
    )
}

export default Header