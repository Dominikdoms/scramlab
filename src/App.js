import MainCarousel from "./Components/carousel";
import './scss/main.scss'
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";


const App=()=> {
    return (
        <>
            <MainCarousel/>
            <CallToAction/>
            <FormToSave/>
        </>
    )
}
export default App;
