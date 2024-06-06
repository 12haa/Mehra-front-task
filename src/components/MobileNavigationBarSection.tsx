import {MobileNavigationSectionData} from "../dummyData.ts";

const MobileNavigationBarSection = () => {
    return (
        <div className="mobile__navbar-wrapper-main-div ">
            <div className="mobile__navbar-wrapper" dir="rtl">
                {
                    MobileNavigationSectionData.map((item, i) => {
                        // TODO : Change 'p' Tag  Color Based On Route
                        const isFirstItem = i === 0 ? "first-item" : "";
                        return (
                            <div className={`mobile__navbar-items-wrapper ${isFirstItem}`} key={i}>
                                <img src={item.iconPath} alt="Home Icon"/>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MobileNavigationBarSection;
