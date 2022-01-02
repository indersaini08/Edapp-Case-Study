import React from "react";
import { RichText } from "prismic-reactjs";

const TextimageLeft = ({ slice }) => (
  <section>
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
  </section>
);

export default TextimageLeft;
