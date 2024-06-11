import Bounded from "./Bounded.tsx";
import CategoryCard from "./CategoryCard.tsx";
import {FooterCardsCategoryData} from "../dummyData.ts";
import CustomButton from "./CustomButton.tsx";
import {useEffect, useRef, useState} from "react";
import {calculateTagPosition} from "../utils/helpers";
import FooterModal from "./FooterModal.tsx";
import FooterMobileCard from "./FooterMobileCard.tsx";

const Footer = () => {
    const productTags = [
        {
            x: 108,
            y: 60,
            description: "This is the top of the shoe",
        },
        {
            x: 60,
            y: 270,
            description: "This is the left side of the shoe",
        },
        {
            x: 180,
            y: 160,
            description: "This is the left side of the shoe",
        }
        // Add more product tags as needed
    ];
    const [selectedTag, setSelectedTag] = useState(null);
    const [modalPosition, setModalPosition] = useState(null)
    const modalRef = useRef(null)
    const imageRef = useRef(null)
    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                const imageWidth = imageRef.current.naturalWidth - 300;
                const imageHeight = imageRef.current.naturalHeight - 300;
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight
                // Calculate the position of the tags
                const tagPositions = productTags.map((tag) =>
                    calculateTagPosition(imageWidth, imageHeight, tag.x, tag.y, viewportWidth)
                );
                const modalPosition = calculateTagPosition(
                    selectedTag?.x, selectedTag?.y, viewportWidth, viewportWidth, viewportHeight
                )
                console.log(modalPosition, "modalPosition");
                // Set the position of the tags
                tagPositions.forEach(({tagLeft, tagTop, tagWidth, tagHeight}, index) => {
                    const tagRef = productTagRefs.current[index];
                    if (tagRef) {
                        tagRef.style.left = tagLeft;
                        tagRef.style.top = tagTop;
                        tagRef.style.width = `${tagWidth}px`;
                        tagRef.style.height = `${tagHeight}px`;
                    }
                });
                setModalPosition(modalPosition)
            }
        };
        handleResize(); // Initial resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [imageRef, selectedTag]);
    const productTagRefs = useRef([]);
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <div className="footer__main-div">
            <Bounded as="footer" style={{backgroundColor: "white",}}
                     childrenStyle={{backgroundColor: "white"}}>
                <div className="footer__items-main-wrapper">
                    <div className="footer__items-wrapper">
                        <div className="footer__items-image-wrapper">
                            <img src="/src/assets/images/cuteWoman.png" alt="cuteWomen Image" ref={imageRef}/>

                            {productTags.map((tag, index) => (
                                <img src="/src/assets/icons/ClickCircle.svg" alt="productTag Image"
                                     key={index}
                                     className="product-tag"
                                     ref={(ref) => {
                                         productTagRefs.current[index] = ref;
                                     }}
                                     style={{
                                         left: `${tag.x}px`,
                                         top: `${tag.y}px`,
                                         width: "0px",
                                         height: "0px",
                                     }}
                                     onClick={() => handleTagClick(tag)}
                                />
                            ))}
                            {selectedTag && (
                                <FooterMobileCard ref={modalRef} setSelectedTag={setSelectedTag}/>
                            )}
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
