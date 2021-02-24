import MainCarousel from "./components/carousel";
import './scss/main.scss'
import Header from "./inApp/Header"
import Author from "./inApp/Author";
import About from "./inApp/About";
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";
import MainFooter from "./components/footer";
import {BrowserRouter} from "react-router-dom";
import {MainView} from "./components/main-view";
import {AddRecipe} from './components/add-recipe'

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Author/>
            <About/>
            <MainCarousel/>
            <CallToAction/>
            <FormToSave/>
            <MainFooter/>
            <MainView/>
            <AddRecipe/>
        </BrowserRouter>
    )
}
export default App;
