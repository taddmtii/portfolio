import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { BrowserRouter } from "react-router";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <AboutMe />
            </BrowserRouter>
        </>
    );
}

export default App;
