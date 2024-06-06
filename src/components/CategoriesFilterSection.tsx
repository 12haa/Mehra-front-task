import {CategoryItemsData} from "../dummyData.ts";
import CategoryItemCard from "./CategoryItemCard.tsx";
import Bounded from "./Bounded.tsx";

const CategoriesFilterSection = () => {
    return (
        <div className="categories__filter-section-main-div">
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
                            marginTop: "3px"
                        }}/>
                    </div>
                </a>
            </Bounded>
        </div>
    )
}
export default CategoriesFilterSection;
