import React, { useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className={css.container}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>ALLSTUFF</span>
        </div>

        <div className={css.right}>
          <div className={css.bars} onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>

          <ul
            className={css.menu}
            style={{ display: showMenu ? "inherit" : "none" }}
          >
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>

          <input type="text" placeholder="search" className={css.search} />

          <CgShoppingBag className={css.cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
