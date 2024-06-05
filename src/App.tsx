import "./App.css"
import Navbar from "./components/Navbar.tsx";
import Bounded from "./components/MaxWidthContainer.tsx";
import CategoryItemCard from "./components/CategoryItemCard.tsx";
import {CategoryItemsData} from "./dummyData.ts";
import ProductCard from "./components/ProductCard.tsx";

function App() {
    return (
        <main className="App">
            <Navbar/>
            <Bounded>
                <div className="categories__items-div">
                    {CategoryItemsData.map((item) => {
                        return <CategoryItemCard title={item.title} linkTo={item.linkTo} key={item.id}/>
                    })}
                </div>
                <a dir="rtl"
                   className="categories__view-all-link"
                   onClick={() => {
                   }}
                >
                    <p style={{color: "#878787"}}>مشاهده همه</p>
                    <div style={{
                        flexDirection: "row",
                        display: "flex",
                    }}>
                        <img src="/src/assets/icons/ArroEnd.svg" alt="Arrow" style={{
                            width: "15px",
                            height: "15px",
                            marginTop:'3px'

                        }}/>
                    </div>
                </a>
                {/*Products Card Section*/}
                <div className="product__card-wrapper">
                    {
                        Array.from({length: 10}, (_, index) => {
                            return <ProductCard key={index}/>
                    })}
                </div>
            </Bounded>

        </main>
    )
}

export default App
