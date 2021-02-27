import React, {useState, useEffect} from 'react'
import './main-view.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {GetData} from "../RestApi/names";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { DesktopWidgets } from './desktop-widgets'
import {RecipeList} from './recipe-list'
// import {NewRecipe} from './add-new-recipe/new-recipe'
import CustomizedSnackbars from "./widgets";
export const MainView = () => {
    const [name, setName] = useState(null);
    console.log(name)
    useEffect(async () => {
            const newName = await GetData()
            if (newName) {
                setName(newName.name)
            }
        }
        , []
    )
    return (
        <>
            <header className={"header-view"}>
                <div className={"header-view__container"}>
                    <h1 className={"header-view__pagetitle"}>
                    <span className={"header-view__pagetitle__part1"}>
                        Zaplanuj
                    </span>
                        <span className={"header-view__pagetitle__part2"}>
                        Jedzonko
                    </span>
                    </h1>
                    <div className={"header-view__user"}>
                        <h2 className={"header-view_user-name"}>
                            {name}
                        </h2>
                        <span className={"header-view_icon"}>
                       <FontAwesomeIcon className={"header-view_icon"}
                                        icon={faUserCircle}/>
                    </span>
                    </div>
                </div>
            </header>

          <div className={"aside-container"}>
            <aside>
                <HashRouter>
                    <nav className={"aside-menu"}>
                        <ul className={""}>
                            <li className={"aside-link"}>
                                <Link to={"/app/desktop"}>Pulpit<FontAwesomeIcon
                                    className={"faChevronRight"}
                                    icon={faChevronRight}/></Link>
                            </li>
                            <li className={"aside-link"}>
                                <Link to={"/app/recipes"}>Przepisy<FontAwesomeIcon
                                    className={"faChevronRight-center"}
                                    icon={faChevronRight}/></Link>
                            </li>
                            <li className={"aside-link"}>
                                <Link to={"/app/plans"}>Plany<FontAwesomeIcon
                                    className={"faChevronRight"}
                                    icon={faChevronRight}/></Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path={"/app/desktop"}>
                            {/*<NewRecipe />*/}
                            <DesktopWidgets/>
                            <CustomizedSnackbars/>
                        </Route>
                        <Route exact path={"/app/recipes"}>
                            {/*<Recipes />*/}
                            <RecipeList />
                        </Route>
                        <Route exact path={"/app/plans"}>
                            {/*<Plans />*/}
                        </Route>
                    </Switch>
                </HashRouter>
            </aside>
              {/*-------------------
              ------COMPONENTS------
              ----------------------*/}
              {/*<DesktopWidgets/>*/}

          {/*-------------------
          --------------------*/}
          </div>
        </>

    )
}