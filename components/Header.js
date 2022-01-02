import React from "react";
import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";

import { DocLink } from "components";
import { headerStyles } from "styles";

const Header = ({ menu }) => (
  <header className="header site-header" id="myHeader">
    <div className="container">
      <NextLink href="/">
        <a className="logo" title="EdApp LMS Home" href="/">
          logo
        </a>
      </NextLink>
      <MenuLinks menu={menu} />
      <style jsx global>
        {headerStyles}
      </style>
    </div>
  </header>
);

const MenuLinks = ({ menu }) => {
  if (menu) {
    return (
      <nav>
        <ul>
          {menu.data.menu_links.map((menuLink, index) => (
            <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

const MenuLink = ({ menuLink }) => (
  <li>
    <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
  </li>
);

// When the user scrolls the page, execute myFunction
if (typeof window !== "undefined") {
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
export default Header;
