import MainCarousel from "./components/carousel";
import './scss/main.scss'
import Header from "./inApp/Header"
import Author from "./inApp/Author";
import About from "./inApp/About";
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";
import MainFooter from "./components/footer";
import {MainView} from "./components/main-view";
import AddName from "./components/addname";
import Widgets from "./components/widgets";
import AddingPlan from "./components/addingPlan";
import NewSchedule from "./components/newSchedule";
const App = () => {
    return (
        <>
            <Header/>
            <Author/>
            <About/>
            <MainCarousel/>
            <CallToAction/>
            <FormToSave/>
            <AddName/>
            <MainFooter/>
            <MainView/>
            <Widgets/>
            <AddingPlan/>
            <NewSchedule/>
        </>
    )
}
export default App;
