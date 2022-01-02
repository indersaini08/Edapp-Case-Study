import React from "react";
import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";

import { DocLink } from "components";
import { footerStyles } from "styles";

const Footer = ({ foot }) => (
  <footer>
    <div className="container">
      <MenuLinks foot={foot} />
      <div className="col100 col fleft text-center block-v-lg">
        <a
          class="download-link"
          href="https://apple.co/1RNEsSk"
          target="_blank"
          rel="noopener"
        >
          <img
            src="/images/app-store-badge-2x.png"
            alt="Download on the App Store"
            class=""
            width="156"
            height="48"
          />
        </a>
        <a
          class="download-link"
          href="https://bit.ly/1ZvyCv1"
          target="_blank"
          rel="noopener"
        >
          <img
            src="/images/google-play-badge-2x.png"
            alt="Get it on Google Play"
            width="172"
            height="48"
          />
        </a>
        <a
          class="download-link"
          href="https://web.edapp.com"
          title="Welcome to EdApp"
          target="_blank"
        >
          <img
            loading="lazy"
            src="/images/ed-web-badge-2x.png"
            alt="Learn online at web.edapp.com"
            class=""
            width="176"
            height="48"
          />
        </a>
      </div>
      <style jsx global>
        {footerStyles}
      </style>
    </div>
  </footer>
);

const MenuLinks = ({ foot }) => {
  if (foot) {
    return (
      <div className="footer-wrap">
        <div className="plr20 fleft m-col100">
          <nav className="fleft col16 col">
            <RichText render={foot.data.title} />
            <ul>
              {foot.data.menu_links.map((menuLink, index) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="plr20 fleft m-col100">
          <nav className="fleft col16 col">
            <RichText render={foot.data.title1} />
            <ul>
              {foot.data.menu_links1.map((menuLink, index) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="plr20 fleft m-col100">
          <nav className="fleft col16 col">
            <RichText render={foot.data.title2} />
            <ul>
              {foot.data.menu_links2.map((menuLink, index) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="plr20 fleft m-col100">
          <nav className="fleft col16 col ">
            <RichText render={foot.data.title3} />
            <ul>
              {foot.data.menu_links3.map((menuLink, index) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="plr20 fleft m-col100">
          <nav className="fleft col16 col">
            <RichText render={foot.data.title4} />
            <ul>
              {foot.data.menu_links4.map((menuLink, index) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  return null;
};

const MenuLink = ({ menuLink }) => (
  <li>
    <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
  </li>
);
export default Footer;
