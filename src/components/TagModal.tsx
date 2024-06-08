

const TagModal = ({isOpen , description} : {isOpen: boolean, description: string }) => {
    return (
        <div style={{display: isOpen ? "block" : "none", position: "fixed", top: "20%", left: "30%"}}>
            <div style={{backgroundColor: "white", padding: "10px", borderRadius: "5px"}}>
                {description}
            </div>
        </div>
    )
}
export default TagModal;
