import Bounded from "./Bounded.tsx";
import CategoryCard from "./CategoryCard.tsx";
import {FooterCardsCategoryData} from "../dummyData.ts";
import CustomButton from "./CustomButton.tsx";

const Footer = () => {
    return (
        <div className="footer__main-div">
            <Bounded as="footer" style={{backgroundColor: "white", width: "100%"}}
                     childrenStyle={{backgroundColor: "white"}}>
                <div className="footer__items-main-wrapper">
                    <div className="footer__items-wrapper">
                        <div className="footer__items-image-wrapper">
                            <img src="/src/assets/images/cuteWoman.png" alt="cuteWomen Image"/>
                        </div>
                        <div className="footer__item-right-wrapper">
                            <div className="footer__items-cards-wrapper" dir="rtl">
                                {
                                    FooterCardsCategoryData.map((item, i) => {
                                        return (
                                            <CategoryCard iconPath={item.iconPath} key={i} title={item.title}/>
                                        )
                                    })
                                }
                            </div>
                            <div style={{
                                marginTop: "40px",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }} dir="rtl">
                                <CustomButton iconUrl="/src/assets/icons/arrow-down.svg" title="مشاهده همه محصولات"
                                              linkUrl="/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Bounded>
        </div>
    )
}
export default Footer;
