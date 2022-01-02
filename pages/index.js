import React from "react";

import DefaultLayout from "layouts";
import { Header, HomeBanner, SliceZone, Footer } from "components";

import { Client } from "utils/prismicHelpers";

const HomePage = ({ doc, menu, foot }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <div className="homepage">
          <Header menu={menu} />
          <HomeBanner banner={doc.data.homepage_banner[0]} />
          <SliceZone sliceZone={doc.data.page_content} />
          <Footer foot={foot} />
        </div>
      </DefaultLayout>
    );
  }

  // Call the standard error page if the document was not found
  return null;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};
  const menu = (await client.getSingle("menu", ref ? { ref } : null)) || {};
  const foot = (await client.getSingle("foot", ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      menu,
      foot,
      preview,
    },
  };
}

export default HomePage;
