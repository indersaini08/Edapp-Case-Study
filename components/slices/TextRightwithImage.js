import React from "react";
import { RichText } from "prismic-reactjs";
import { DocLink } from "components";
import { linkResolver } from "prismic-configuration";

const TextRightwithImage = ({ slice }) => (
  <section className="thighlight content-section">
    <div className="container">
      <div className="col50 col fleft">
        <span className="title">
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Prismic builder!</p>
        )}
      </div>
      <div className="col50 col fright">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
      <div className="col66 col col-md-offset-2 fleft">
        {slice.primary.quote_text ? (
          <RichText render={slice.primary.quote_text} />
        ) : (
          <p>start by editing this slice from inside Prismic builder!</p>
        )}
      </div>
    </div>
  </section>
);

export default TextRightwithImage;
