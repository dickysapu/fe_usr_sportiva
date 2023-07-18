import Link from "next/link";
import React, { useState } from "react";
import { Home, Pages, Services } from "./Menu";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${
        mobileTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="assets/img/logoo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li className="active">
              <a href="#">
                Home
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("demo")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("demo")}>
                <Home />
              </ul>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#">
                More
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Pages")}>
                <Services />

                <Pages />
              </ul>
            </li>
            <li className="active">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
