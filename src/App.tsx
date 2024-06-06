import "./App.css"
import Navbar from "./components/Navbar.tsx";
import HeroCardsSection from "./components/HeroCardsSection.tsx";
import MobileNavigationBarSection from "./components/MobileNavigationBarSection.tsx";
import CategoriesFilterSection from "./components/CategoriesFilterSection.tsx";

function App() {
    return (
        <main className="App">
            <Navbar/>
            {/*Categories Section*/}
            <CategoriesFilterSection/>

            <HeroCardsSection/>
            {/*  Mobile Navigation Bar Section*/}
            <MobileNavigationBarSection/>

            <HeroCardsSection/>


        </main>
    )
}

export default App
