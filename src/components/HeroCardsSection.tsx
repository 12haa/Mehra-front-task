import Bounded from "./Bounded.tsx";

import ProductCard from "./ProductCard.tsx";

const HeroCardsSection = () => {
    return (
        <div className="hero__section-main-div">
            <Bounded childrenStyle={{paddingTop:'20px'}}>
                {/*Products Card Section*/}
                <div className="product__card-wrapper">
                    {
                        Array.from({length: 12}, (_, index) => {
                            return <ProductCard key={index}/>
                        })}
                </div>
            </Bounded>
        </div>
    )
}
export default HeroCardsSection;
