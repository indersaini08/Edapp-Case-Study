import css from "styled-jsx/css";

export const homeBannerStyles = css.global`
  .homepage-banner {
    margin: -82px 0 80px 0;
    padding: 0;
    background-position: center center;
    background-size: cover;
    color: #ffffff;
    line-height: 1.75;
    height: 450px;
    text-align: center;
  }
  .banner-content {
    text-align: center;
  }
  .banner-title,
  .banner-description {
    width: 90%;
    max-width: 490px;
    margin-left: auto;
    margin-right: auto;
  }
  .banner-title {
    color: #ffffff;
    font-size: 70px;
    font-weight: 900;
    line-height: 70px;
  }
  .banner-button {
    background: #ffffff;
    border-radius: 7px;
    color: #484d52;
    font-size: 14px;
    font-weight: 700;
    padding: 15px 40px;
  }
  .banner-button:hover {
    background: #c8c9cb;
  }
  @media (max-width: 767px) {
    .homepage-banner {
      margin: -13px 0 0 0;
      padding: 0;
    }
    .banner-title {
      font-size: 50px;
      line-height: 50px;
    }
  }
  .text-section-1col {
    max-width: 66.66667%;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  p.block-img {
    width: 33.333%;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
  @media (max-width: 767px) {
    p.block-img {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
    .text-section-1col {
      max-width: 89.3%;
    }
  }
`;
