"use client";
import { useEffect, useRef, useState } from "react";
import Bounded from "./Bounded.tsx";
import { NavMenuData } from "../dummyData.ts";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // UseEffect to handle modal close on outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, menuOpen]);
  return (
    <nav className="navbar__wrapper">
      {menuOpen && (
        <div className="navbar__menu-modal" ref={modalRef}>
          <Bounded
            as="div"
            style={{ backgroundColor: "white" }}
            childrenStyle={{ backgroundColor: "white" }}
          >
            <div className="navbar_menu-items-main-div">
              {NavMenuData.map((data, index) => (
                <div className="navbar__menu-item" key={index}>
                  <a href={data.linkTo}>
                    <p>{data.title}</p>
                  </a>
                  {data.iconPath ? (
                    <img src={data.iconPath} alt="Menu Icon" />
                  ) : null}
                </div>
              ))}
            </div>
          </Bounded>
        </div>
      )}
      <div className="navbar__items" dir="ltr">
        <div className="navbar__logo">
          <img
            src="/src/assets/images/mehrashop-logo.png"
            alt="Mehrashop Logo"
          />
        </div>
        <div className="navbar__desktop-items">
          {NavMenuData.map((data) => (
            <div key={data.id}>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
        <div className="navbar__desktop-icons">
          <img src="/src/assets/icons/Profile.svg" alt="profile icon" />
          <img src="/src/assets/icons/Heart.svg" alt="heart icon" />
          <img
            src="/src/assets/icons/shopping-Cart.svg"
            alt="shooping card icon"
          />
        </div>
        <div className="navbar__mobile-icons">
          <img src="/src/assets/icons/SearchIcon.svg" alt="Search Icon" />
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src="/src/assets/icons/HumbergerIcon.svg"
              alt="Humberger Icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
