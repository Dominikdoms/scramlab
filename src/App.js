import MainCarousel from "./Components/carousel";
import MainFooter from "./Components/footer";
import './scss/main.scss'
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";

const App = () => {
    return (
        <>
            <MainCarousel/>
            <CallToAction/>
            <FormToSave/>
            <MainFooter/>
        </>
    )

}

export default App;
