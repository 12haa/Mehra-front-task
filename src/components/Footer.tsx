import Bounded from "./Bounded.tsx";
import CategoryCard from "./CategoryCard.tsx";
import { FooterCardsCategoryData } from "../dummyData.ts";
import CustomButton from "./CustomButton.tsx";
import { useEffect, useRef, useState } from "react";
import { calculateModalPosition, calculateTagPosition } from "../utils/helpers";
import FooterModal from "./FooterModal.tsx";
import FooterMobileCard from "./FooterMobileCard.tsx";
import FooterDesktopCard from "./FooterDesktopCard.tsx";

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
      description: "This is Hat",
    },
    {
      x: 180,
      y: 160,
      description: "This is Bracelet",
    },
    // Add more product tags as needed
  ];
  const [selectedTag, setSelectedTag] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  // To handle
  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        const imageWidth = imageRef.current.naturalWidth - 300;
        const imageHeight = imageRef.current.naturalHeight - 300;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Calculate the position of the tags
        const tagPositions = productTags.map((tag) =>
          calculateTagPosition(
            imageWidth,
            imageHeight,
            tag.x,
            tag.y,
            viewportWidth,
          ),
        );
        const modalPosition = calculateModalPosition(
          selectedTag?.x,
          selectedTag?.y,
          viewportWidth,
          viewportWidth,
          viewportHeight,
        );
        console.log(modalPosition, "modalPosition");
        // Set the position of the tags
        tagPositions.forEach(
          ({ tagLeft, tagTop, tagWidth, tagHeight }, index) => {
            const tagRef = productTagRefs.current[index];
            if (tagRef) {
              tagRef.style.left = tagLeft;
              tagRef.style.top = tagTop;
              tagRef.style.width = `${tagWidth}px`;
              tagRef.style.height = `${tagHeight}px`;
            }
          },
        );
        setModalPosition(modalPosition);
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
      <Bounded
        as="footer"
        style={{ backgroundColor: "white" }}
        childrenStyle={{ backgroundColor: "white" }}
      >
        <div className="footer__items-main-wrapper">
          <div className="footer__items-wrapper">
            <div className="footer__items-image-wrapper">
              <img
                src="/src/assets/images/cuteWoman.png"
                alt="cuteWomen Image"
                ref={imageRef}
              />

              {productTags.map((tag, index) => (
                <img
                  src="/src/assets/icons/ClickCircle.svg"
                  alt="productTag Image"
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
                <>
                  <FooterMobileCard
                    ref={modalRef}
                    setSelectedTag={setSelectedTag}
                  />
                  {/*<FooterDesktopCard/>*/}
                  <div
                    className="desktop__modal"
                    style={{
                      left: `${selectedTag.x * 3}px`, // Add 50px to the x value of the selected tag
                      top: `${selectedTag.y * 1.25}px`, // Add 30px to the y value of the selected tag
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      <span
                        className="close"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedTag(null)}
                      >
                        &times;
                      </span>
                    </div>
                    <div className="modal__content-main-div">
                      <div className="modal__content-left-div">
                        <p>عنوان محصول عنوان محصول عنوان محصول عنوان محصول</p>
                        <div className="modal__content-footer-div">
                          <div className="modal__content-left-rate-div">
                            <p
                              style={{
                                textDecoration: "line-through",
                              }}
                            >
                              46000
                            </p>
                            <div>
                              <p>4.6</p>
                              <img
                                src="src/assets/images/DummyProductRatingStar.png"
                                alt="Dummy Product Rating Star"
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              alignItems: "start",
                              paddingTop: "30px",
                              fontSize: "17px",
                            }}
                          >
                            <p style={{ color: "#86bc42", gap: "10px" }}>
                              460,00&nbsp;
                              <span style={{ color: "#878787" }}>تومان</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="desktop__modal-right-div">
                        <img
                          src="/src/assets/images/DummyProductImage.png"
                          alt="Dummy Product Image"
                        />
                      </div>
                    </div>
                  </div>
                </>
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
              <div
                style={{
                  marginTop: "40px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                dir="rtl"
              >
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
