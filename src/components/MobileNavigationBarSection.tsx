import {MobileNavigationSectionData} from "../dummyData.ts";

const MobileNavigationBarSection = () => {
    const pathname = window.location.pathname
    return (
        <div className="mobile__navbar-wrapper-main-div ">
            <div className="mobile__navbar-wrapper" dir="rtl">
                {
                    MobileNavigationSectionData.map((item, i) => {
                        // TODO : Change 'p' Tag  Color Based On Route
                        return (
                            <div className={`mobile__navbar-items-wrapper`} key={i}>
                                <img src={`${pathname.includes(item.linkTo) ? item.greenIconPath : item.iconPath}`}
                                     alt="Home Icon"/>
                                <a href={item.linkTo} style={{
                                    fontWeight: pathname === item.linkTo ? "bold" : "normal",
                                }}>
                                    <p style={{color: pathname === item.linkTo ? "#80ad01" : "none",}}>
                                        {item.title}
                                    </p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MobileNavigationBarSection;
