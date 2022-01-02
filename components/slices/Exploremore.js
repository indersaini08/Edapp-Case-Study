import React from "react";
import { RichText } from "prismic-reactjs";
import { DocLink } from "components";
import { linkResolver } from "prismic-configuration";

const Exploremore = ({ slice }) => (
  <section className=" content-section explore-more text-center block-smoke fleft col100">
    <div className="container block-v-lg over">
      <div className="col83 center col">
        <RichText render={slice.primary.title} linkResolver={linkResolver} />

        <div className="cards-main">
          {slice.items.map((item, index) => (
            <GalleryItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GalleryItem = ({ item }) => (
  <div className="col46 fleft col card padding0 mar16">
    <div className="block-v-sm col18 col fleft padding0">
      <img src={item.image.url} alt={item.image.alt} className="img-circle" />
    </div>
    <div className="block-v-sm col80 col fright card-content primary-color padding0">
      <RichText render={item.title} linkResolver={linkResolver} />
      <DocLink link={item.label_link}>
        <RichText render={item.link_label} />
      </DocLink>
    </div>
  </div>
);

export default Exploremore;
