
const CategoryCard = ({iconPath , title}: {iconPath: string, title: string }) => {
    return (
        <div className="category__footer-card-wrapper">
            <div className="category__footer-card-item">
                <img src={iconPath} alt="category title"/>
                <p>{title}</p>
            </div>
        </div>
    )
}
export default CategoryCard;
