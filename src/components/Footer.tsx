import CategoryCard from "./CategoryCard.tsx";
import { FooterCardsCategoryData } from "../dummyData.ts";
import Bounded from "./Bounded.tsx";
import CustomButton from "./CustomButton.tsx";
import { useEffect, useRef, useState } from "react";
import { calculateModalPosition, calculateTagPosition } from "../utils/helpers";
import FooterMobileCard from "./FooterMobileCard.tsx";
import FooterDesktopCard from "./FooterDesktopCard.tsx";

const Footer = () => {
  // Add more products as needed
  const images = [
    {
      path: "/src/assets/images/cuteWoman.png",
      alt: "Pic1",
      tags: [
        {
          x: 130,
          y: 70,
          description: "This is Hat",
        },
        {
          x: 90,
          y: 250,
          description: "This is the top of the Bag",
        },
        {
          x: 220,
          y: 140,
          description: "This is Bracelet",
        },
      ],
    },
    {
      path: "/src/assets/images/image110.png",
      alt: "Pic2",
      tags: [
        {
          x: 210,
          y: 90,
          description: "This is the top of the shoe",
        },
        {
          x: 250,
          y: 270,
          description: "This is Hat",
        },
        {
          x: 150,
          y: 160,
          description: "This is Bracelet",
        },
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const productTagRefs = useRef([]);
  // To handle Tag and Modal Position
  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        const imageWidth = imageRef.current.naturalWidth / 10;
        const imageHeight = imageRef.current.naturalHeight / 10;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Calculate the position of the tags
        const tagPositions = images[currentIndex].tags.map((tag) =>
          calculateTagPosition(
            imageWidth,
            imageHeight,
            tag.x,
            tag.y,
            viewportWidth,
          ),
        );
        const modalPosition = calculateTagPosition(
          selectedTag?.x,
          selectedTag?.y,
          viewportWidth,
          viewportWidth,
          viewportHeight,
        );
        // Set the position of the tags
        tagPositions.forEach(
          ({ tagLeft, tagTop, tagWidth, tagHeight }, index) => {
            const tagRef = productTagRefs.current[index];
            if (tagRef) {
              tagRef.style.left = tagLeft;
              tagRef.style.top = tagTop;
              tagRef.style.width = `${tagWidth + 3}px`;
              tagRef.style.height = `${tagHeight + 3}px`;
            }
          },
        );
        setModalPosition(modalPosition);
      }
    };
    handleResize(); // Initial resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageRef, selectedTag, currentIndex]);
  const handleTagClick = (tag: any) => {
    setSelectedTag(tag);
  };
  console.log();
  return (
    <div className="footer__main-div">
      <Bounded
        as="footer"
        style={{ backgroundColor: "white" }}
        childrenStyle={{ backgroundColor: "white" }}
      >
        <div className="footer__items-main-wrapper">
          <div className="footer__items-wrapper">
            <div className="footer__items-image-wrapper">
              <div className="image__slider">
                <button
                  onClick={() =>
                    setCurrentIndex((prevIndex) =>
                      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
                    )
                  }
                >
                  <img
                    src="/src/assets/icons/Arrow.svg"
                    alt="Arrow"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </button>

                <img
                  src={images[currentIndex].path}
                  alt="cuteWomen Image"
                  ref={imageRef}
                />
                <button
                  onClick={() =>
                    setCurrentIndex((prevIndex) =>
                      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
                    )
                  }
                >
                  <img
                    src="/src/assets/icons/Arrow.svg"
                    alt="Arrow"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </button>
              </div>

              {images[currentIndex].tags.map((tag, index) => (
                <img
                  src="/src/assets/icons/ClickCircle.svg"
                  alt="productTag Image"
                  key={index}
                  className="product-tag"
                  ref={(ref) => {
                    productTagRefs.current[index] = ref;
                  }}
                  style={{
                    left: `${tag.x}px `,
                    top: `${tag.y}px`,
                  }}
                  onClick={() => handleTagClick(tag)}
                />
              ))}

              {selectedTag && (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  {/*Mobile Card Modal*/}
                  <FooterMobileCard
                    ref={modalRef}
                    setSelectedTag={setSelectedTag}
                  />
                  {/*<Desktop Card Modal/>*/}
                  <FooterDesktopCard
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    desc={selectedTag.description}
                  />
                </div>
              )}
            </div>
            <div className="footer__item-right-wrapper">
              <div className="footer__items-cards-wrapper" dir="rtl">
                {FooterCardsCategoryData.map((item, i) => {
                  return (
                    <CategoryCard
                      iconPath={item.iconPath}
                      key={i}
                      title={item.title}
                    />
                  );
                })}
              </div>
              <div className="custom__btn-main-div" dir="rtl">
                <CustomButton
                  iconUrl="/src/assets/icons/arrow-down.svg"
                  title="مشاهده همه محصولات"
                  linkUrl="/"
                />
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
};
export default Footer;
