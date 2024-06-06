interface CustomButtonProps {
    title: string;
    linkUrl?: string;
    iconUrl?: string;
}

const CustomButton = ({title, linkUrl, iconUrl}: CustomButtonProps) => {
    return (
        <div className="custom__btn-main-div">
            <button className="custom__btn">
                <a href={linkUrl}>
                    <p>{title}</p>
                </a>
                <img src={iconUrl} alt="arroEnd"/>
            </button>

        </div>
    )
}
export default CustomButton;
