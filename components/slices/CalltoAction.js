import React from "react";
import { RichText } from "prismic-reactjs";
import { DocLink } from "../../components";

const CalltoAction = ({ slice }) => (
  <section className="content-section calltoaction col100 block-dark fleft block-v-lg">
    <div className="container">
      {slice.primary.paragraph ? (
        <RichText render={slice.primary.paragraph} />
      ) : (
        <p>start by editing this slice from inside Prismic builder!</p>
      )}

      <DocLink link={slice.primary.button_link} linkClass="signup-btn">
        <RichText render={slice.primary.button_label_custom} />
      </DocLink>
      <div className="signup-bottom">
        {slice.primary.button_bottom_text ? (
          <RichText render={slice.primary.button_bottom_text} />
        ) : (
          <p>start by editing this slice from inside Prismic builder!</p>
        )}
      </div>
    </div>
  </section>
);

export default CalltoAction;
