import "./App.css";
import Navbar from "./components/Navbar.tsx";
import HeroCardsSection from "./components/HeroCardsSection.tsx";
import MobileNavigationBarSection from "./components/MobileNavigationBarSection.tsx";
import CategoriesFilterSection from "./components/CategoriesFilterSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <main className="App">
      {/*<Navbar />*/}
      {/*Categories Section*/}
      <Navbar />
      <div className="root__div">
        <CategoriesFilterSection />
        <HeroCardsSection />
        {/*  Mobile Navigation Bar Section*/}
        <MobileNavigationBarSection />
        <HeroCardsSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
