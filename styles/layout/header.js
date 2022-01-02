import css from "styled-jsx/css";

export const headerStyles = css.global`
  .site-header {
    height: 30px;
    padding: 20px 0;
  }
  .site-header,
  .site-header a {
    color: #484d52;
    font-weight: 700;
  }
  .site-header nav a:hover {
    color: #72767b;
  }
  .homepage .site-header,
  .homepage .site-header a {
    color: #ffffff;
  }
  .homepage .site-header nav a:hover {
    color: #c8c9cb;
  }
  .site-header .logo {
    display: inline-block;
    font-size: 22px;
    font-weight: 900;
  }
  .site-header nav {
    float: right;
  }
  .site-header nav ul {
    margin: 0;
  }
  .site-header nav li {
    display: inline-block;
    margin-left: 40px;
  }
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 32px 0 0;
    color: #fff;
    transition: background-color 0.2s, transform 0.3s 0.1s;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 40px;
    z-index: 1;
    background-color: #fff;
  }
  .sticky + .content {
    padding-top: 60px;
  }
  .sticky .logo {
    background-image: url(images/ed-logo-sticker-128x128.png);
    margin-top: -15px;
  }
  .sticky a {
    color: #1f2e3c !important;
  }

  @media (max-width: 1060px) {
    .site-header {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media (max-width: 767px) {
    .site-header {
      height: auto;
    }
    .homepage .site-header {
      position: fixed;
      left: 0;
      right: 0;
      max-width: 89.3%;
    }
    .site-header .logo {
      display: block;
      text-align: center;
    }
    .site-header nav {
      float: none;
      margin-top: -34px;
      text-align: center;
    }
    .site-header nav li {
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
