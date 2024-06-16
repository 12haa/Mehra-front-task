interface ProductCardProps {
  imageUrl?: string;
  title?: string;
  price?: number | string;
  outDatedPrice?: number | string;
  ratingNumber?: number;
  ratingTags?: string[];
}

const ProductCard = ({
  title = "عنوان محصول عنوان محصول عنوان محصول ",
  outDatedPrice = "460,000",
  price = "460,000",
  ratingTags = [
    "/src/assets/images/DummyProductRatingImage.png",
    "/src/assets/images/DummyProductRatingImage.png",
    "/src/assets/images/DummyProductRatingImage.png",
  ],
  imageUrl = "/src/assets/images/DummyProductImage.png",
  ratingNumber = 4.6,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product__card-ratingTags">
        {ratingTags.map((_, index) => {
          return <img key={index} src={ratingTags[index]} alt="image" />;
        })}
      </div>
      <div className="product__card-product-image">
        <img src={imageUrl} alt="Product Image" />
      </div>
      <div className="product__card-product-title" dir="rtl">
        <p>{title}</p>
      </div>

      <div className="product__card-product-rating">
        <div className="product__card-product-outDatedPrice">
          <img src="/src/assets/icons/MahraShop.svg" alt="Mehrashop logo" />
        </div>
        <div className="product__card-product-rating-stars">
          <img
            src="/src/assets/images/DummyProductRatingStar.png"
            alt="star image"
          />
          <p>{ratingNumber}</p>
        </div>
      </div>
      <div className="product__card-product-price">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              textDecoration: "line-through",
              fontSize: "14px",
            }}
          >
            {outDatedPrice}
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <p style={{ color: "#878787", fontSize: "12px" }}>تومان</p>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              {price}
            </p>
          </div>
        </div>
        <img
          src="/src/assets/icons/AddBotton.svg"
          alt="Plus Icon "
          style={{
            padding: "0 18px",
          }}
        />
      </div>
    </div>
  );
};
export default ProductCard;
