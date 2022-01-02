import React from "react";
import {
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight,
  AlternateGrid,
  TextRightwithImage,
  CalltoAction,
  CardsCarousel,
  Exploremore,
} from "./";

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "text_section":
          return <TextSection slice={slice} key={`slice-${index}`} />;
        case "quote":
          return <Quote slice={slice} key={`slice-${index}`} />;
        case "full_width_image":
          return <FullWidthImage slice={slice} key={`slice-${index}`} />;
        case "image_gallery":
          return <ImageGallery slice={slice} key={`slice-${index}`} />;
        case "image_highlight":
          return <ImageHighlight slice={slice} key={`slice-${index}`} />;
        case "alternate_grid":
          return <AlternateGrid slice={slice} key={`slice-${index}`} />;
        case "textrightwithimage":
          return <TextRightwithImage slice={slice} key={`slice-${index}`} />;
        case "call_to_action":
          return <CalltoAction slice={slice} key={`slice-${index}`} />;
        case "cards_carousel":
          return <CardsCarousel slice={slice} key={`slice-${index}`} />;
        case "explore_more_section":
          return <Exploremore slice={slice} key={`slice-${index}`} />;
        default:
          return null;
      }
    })}
  </div>
);

export default SliceZone;
