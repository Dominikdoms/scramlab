import MainCarousel from "./Components/carousel";
import './scss/main.scss'
import Header from "./inApp/Header"
import Author from "./inApp/Author";
import About from "./inApp/About";
import {CallToAction} from "./components/callToAction";
import {FormToSave} from "./components/formToSave";
import MainFooter from "./Components/footer";


const App=()=> {
    return (
        <>
      <Header/>
      <Author/>
      <About/>
                <MainCarousel/>
            <CallToAction/>
            <FormToSave/>
          <MainFooter/>

        </>
    )
}
export default App;
