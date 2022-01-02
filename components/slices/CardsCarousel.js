import React from "react";
import { RichText } from "prismic-reactjs";
import { DocLink } from "components";
import { linkResolver } from "prismic-configuration";

const CardsCarousel = ({ slice }) => (
  <section className=" content-section cards_carousel text-center">
    <div className="container">
      <div className="col100 fleft col">
        <RichText render={slice.primary.title} linkResolver={linkResolver} />
      </div>
      <div className="cards-main">
        {slice.items.map((item, index) => (
          <GalleryItem item={item} key={index} />
        ))}
      </div>
    </div>
  </section>
);

const GalleryItem = ({ item }) => (
  <div className="col33 fleft col block-v-sm card">
    <div className="card-blog ">
      <div className="block-v-sm">
        <img src={item.image.url} alt={item.image.alt} className="img-circle" />
      </div>
      <RichText render={item.title} linkResolver={linkResolver} />
      <p className="text-muted">
        <small>{RichText.asText(item.content)}</small>
      </p>
    </div>
  </div>
);

export default CardsCarousel;
