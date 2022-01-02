import React from "react";
import { RichText } from "prismic-reactjs";
import { DocLink } from "components";
import { homeBannerStyles } from "styles";

const HomeBanner = ({ banner }) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `url(${banner.image.url})`,
    }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">{RichText.asText(banner.title)}</h2>
      <p className="banner-description">{RichText.asText(banner.tagline)}</p>
      {/* <DocLink
        link={banner.button_link}
        linkClass="banner-button"
      >
        {RichText.asText(banner.button_label)}
      </DocLink> */}
    </div>
    <style jsx global>
      {homeBannerStyles}
    </style>
  </section>
);

export default HomeBanner;
