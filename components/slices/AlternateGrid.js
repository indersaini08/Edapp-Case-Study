import React from "react";
import { RichText } from "prismic-reactjs";
import { imageHighlightStyles } from "styles";

const AlternateGrid = ({ slice }) => (
  <section
    className="alternateGrid highlight content-section"
    style={{
      backgroundImage: `url(${slice.primary.optional_image.url})`,
    }}
  >
    <div className="container">
      <div
        className="alternateGrid-t text-center col"
        style={{
          float: `${slice.primary.image_side}`,
        }}
      >
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
      <div className="highlight-left">
        {/* <img
        src={slice.primary.optional_image.url}
        alt={slice.primary.optional_image.alt}
      /> */}
      </div>
    </div>
  </section>
);

export default AlternateGrid;
