import React from "react";

interface CategoryItemCardProps {
    title: string;
    linkTo: string;
    children?: React.ReactNode;
}

const CategoryItemCard = ({title, linkTo}: CategoryItemCardProps) => {
    const pathname = window.location.pathname;
    return (
        <div className="category__card-item" style={{
            backgroundColor: pathname === linkTo ? "#d9ddcb" : "#FFFFFF",
        }}>
            <a href={linkTo}>{title}</a>
        </div>
    )
}
export default CategoryItemCard;
