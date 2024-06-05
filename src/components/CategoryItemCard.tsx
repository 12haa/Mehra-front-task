import React from "react";
interface CategoryItemCardProps {
    title: string;
    linkTo: string;
    children?: React.ReactNode;
}
const CategoryItemCard = ({title,linkTo}:CategoryItemCardProps) => {
    return (
        <div className="category__card-item">
            <a href={linkTo} >{title}</a>
        </div>
    )
}
export default CategoryItemCard;
