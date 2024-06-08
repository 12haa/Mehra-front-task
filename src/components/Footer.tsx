import Bounded from "./Bounded.tsx";
import CategoryCard from "./CategoryCard.tsx";
import {FooterCardsCategoryData} from "../dummyData.ts";
import CustomButton from "./CustomButton.tsx";
import {useEffect, useRef, useState} from "react";

const Footer = () => {
    const calculateTagPosition = (imageWidth, imageHeight, tagX, tagY, viewportWidth) => {
        const maxTagWidth = viewportWidth * 0.2; // Set the maximum width of the tag to 20% of the viewport width
        const tagAspectRatio = 1; // Set the aspect ratio of the tag to 1:1
        let tagWidth = maxTagWidth;
        let tagHeight = tagWidth * tagAspectRatio;

        // Calculate the scaling factor to fit the tag inside the image
        const scaleFactor = Math.min(imageWidth / tagWidth, imageHeight / tagHeight);
        tagWidth *= scaleFactor;
        tagHeight *= scaleFactor;

        // Calculate the position of the tag
        const tagLeft = (tagX - tagWidth / 2) / imageWidth *10  + '%';
        const tagTop = (tagY - tagHeight / 2) / imageHeight *10 + '%';

        return { tagLeft, tagTop, tagWidth, tagHeight };
    };
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
        }
        // Add more product tags as needed
    ];
    const [selectedTag, setSelectedTag] = useState(null);
    const imageRef=useRef(null)
    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                const imageWidth = imageRef.current.naturalWidth-300;
                const imageHeight = imageRef.current.naturalHeight-300;
                const viewportWidth = window.innerWidth;

                // Calculate the position of the tags
                const tagPositions = productTags.map((tag) =>
                    calculateTagPosition(imageWidth, imageHeight, tag.x, tag.y, viewportWidth)
                );
                console.log(tagPositions , "tagTag Positions");

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
            }
        };
        handleResize(); // Initial resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const productTagRefs = useRef([]);
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };
    return (
        <div className="footer__main-div">
            <Bounded as="footer" style={{backgroundColor: "white", width: "100%"}}
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
                                    <div className="modal" style={{
                                        left:`${selectedTag.x+100}px`,
                                        top: `${selectedTag.y+20}px`,
                                    }}>
                                        <div className="modal-content">
                                            <span className="close" onClick={() => setSelectedTag(null)}>&times;</span>
                                            <p>{selectedTag.description}</p>
                                        </div>
                                    </div>
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
