import React from 'react'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink, BrowserRouter,
} from 'react-router-dom';
import Why from "./Why";


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
        <Route exact path="/"></Route>
        <Route exact  path="/eatingPlan">
            <Why/>
        </Route>
    </Switch>
    </>
    )
}

export default Header