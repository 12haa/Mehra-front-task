import React from "react"
import CustomButton from "./CustomButton.tsx";
interface FooterMobileCardProps {
    setSelectedTag: (tag) => void;
    ref:React.RefObject<HTMLDivElement>
}

const FooterMobileCard = ({ref , setSelectedTag}:FooterMobileCardProps) => {
    return (
        <div className="modal" ref={ref}>
            <div className="modal__nav-header">
                <p>عنوان محصول عنوان محصول عنوان محصول </p>
                <div className="close" onClick={() => setSelectedTag(null)}>
                    <img src="/src/assets/icons/Xmark.svg" alt="close icon"/>
                </div>
            </div>
            <div className="modal__nav-tags-main-div">
                <div className="modal__nav-left-tag-div">
                    <img src="/src/assets/icons/MehraShopLogo.svg" alt="Mehrashop logo"/>
                    <p>فروشگاه مهراشاپ</p>
                </div>
                <div className="modal__nav-right-tag">
                    {
                        [0, 1, 2].map((item, i) => (
                            <img src="/src/assets/icons/RatingTags.svg"
                                 alt="product rating image"
                                 key={i}/>
                        ))
                    }
                </div>
            </div>
            {/*TODO : Add Image Slider*/}
            <div className="modal__nav-tags-image-div">
                <img src="/src/assets/icons/DummyProductImage.svg" alt="product image"/>
            </div>
            <div className="modal__slidy">
                <img src="/src/assets/icons/Dot.svg" alt="dot"/>
                <img src="/src/assets/icons/Dot.svg" alt="dot"/>
                <img src="/src/assets/icons/Dot.svg" alt="dot"/>
                <img src="/src/assets/icons/Rect.svg" alt="Rectangle"/>
            </div>
            <div className="modal__footer-main-div">
                <div className="modal__footer-left-tag-div">
                    <p>کالای غیر اصل</p>
                    <img src="/src/assets/icons/WarningSign.svg" alt="Mehrashop logo"/>
                </div>
                <div className="modal__footer-right-tag-div">
                    <p>(121)</p>
                    <img src="/src/assets/icons/GrayRatingStar.svg" alt="rating Star" style={{
                        width: "13px", height: "10.5px"
                    }}/>
                    {
                        [0, 1, 2, 3].map((item, i) => (
                            <img src="/src/assets/images/DummyProductRatingStar.png"
                                 alt="product rating image"
                                 key={i}/>
                        ))
                    }
                </div>
            </div>
            <div className="modal__footer-end-div">
                <div className="modal__footer-end-right-div">
                    <CustomButton title="مشاهده محصول" linkUrl={`/product/productId`} style={{
                        padding: "25px 80px",
                    }}/>
                </div>
                <div className="modal__footer-end-left-div">
                    <div className="modal__footer-numbers-div">
                        <p style={{
                            color: "#a3a3a3",
                            textDecoration: "line-through",
                            fontSize: "16px",
                        }}>46,000</p>
                        <div>
                            <p>% 20</p>
                        </div>
                    </div>
                    <div className="modal__footer-real-price-div">
                        <p style={{
                            color: "#80ad01",
                            fontSize: "16px",
                        }}>46,000</p>

                        <p>تومان</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterMobileCard;
