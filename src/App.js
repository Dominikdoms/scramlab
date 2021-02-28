import MainCarousel from "./components/carousel";
import './scss/main.scss'
import Header from "./inApp/Header"
import Author from "./inApp/Author";
import About from "./inApp/About";
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";
import MainFooter from "./components/footer";
import {BrowserRouter} from "react-router-dom";
// import {MainView} from "./components/main-view";
// import {AddRecipe} from './components/add-recipe'

import {MainView} from "./components/main-view";
import AddName from "./components/addname";
import Widgets from "./components/widgets";
import AddingPlan from "./components/addingPlan";
import NewSchedule from "./components/newSchedule";
import {PlanListDisplay} from "./components/8.1-plan-list-display";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <MainCarousel/>
            <CallToAction/>
            <About/>
            <FormToSave/>
            <AddName/>
            <Author/>
            <MainFooter/>
            {/*<Widgets/>*/}
            {/*<AddingPlan/>*/}
            {/*<NewSchedule/>*/}
        </BrowserRouter>


    )
}
export default App;
