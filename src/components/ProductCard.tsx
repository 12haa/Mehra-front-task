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
                         ratingTags = ["/src/assets/images/DummyProductRatingImage.png", "/src/assets/images/DummyProductRatingImage.png", "/src/assets/images/DummyProductRatingImage.png"],
                         imageUrl = "/src/assets/images/DummyProductImage.png",
                         ratingNumber = 4.6
                     }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div className="product__card-ratingTags">
                {
                    ratingTags.map((_, index) => {
                        return <img key={index} src={ratingTags[index]} alt="image"/>
                    })
                }
            </div>
            <div className="product__card-product-image">
                <img src={imageUrl} alt="Product Image"/>
            </div>
            <div className="product__card-product-title" dir="rtl">
                <p>
                    {title}
                </p>
            </div>

            <div className="product__card-product-rating">
                <div className="product__card-product-outDatedPrice">
                    <p>{outDatedPrice}</p>
                </div>
                <div className="product__card-product-rating-stars">
                    <img src="/src/assets/images/DummyProductRatingStar.png" alt="star image"/>
                    <p>{ratingNumber}</p>
                </div>
            </div>
            <div className="product__card-product-price">
                <p>تومان</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
export default ProductCard;
