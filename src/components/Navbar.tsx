const Navbar = () => {
    return (
        <nav className="navbar__wrapper">
            <div className="navbar__items" dir="ltr">
                <div className="navbar__logo">
                    <img src="/src/assets/images/mehrashop-logo.png" alt="Mehrashop Logo"/>
                </div>
                <div className="navbar__icons">
                    <img src="/src/assets/icons/SearchIcon.svg" alt="Search Icon"/>
                    <img src="/src/assets/icons/HumbergerIcon.svg" alt="Humberger Icon"/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
