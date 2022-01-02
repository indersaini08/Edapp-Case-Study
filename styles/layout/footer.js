import css from "styled-jsx/css";

export const footerStyles = css.global`
  footer {
    max-width: 100%;
    font-family: "Lato", sans-serif;
    font-size: 17px;
    text-align: center;
  }
  .footer-wrap {
    margin: 0px auto;
    display: block;
    float: none;
    max-width: 85%;
  }
  footer p {
    border-top: 1px solid #dadada;
    padding: 2rem 0;
    margin-bottom: 0;
  }
  footer ul {
    margin: 0;
    float: left;
    list-style: none;
    padding: 0;
  }
  footer li,
  ul {
    margin: 0 0 12px;
    font-weight: 300;
  }
  footer a {
    color: #848f9d;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.6;
  }
  footer h4 {
    color: #1f2e3c;
    font-weight: 600;
    font-size: 1.16667rem;
    line-height: 1.34em;
    margin: 0 0 12px;
  }

  .footer-logo {
    width: 30px;
    margin-top: 10px;
  }
  @media (max-width: 767px) {
    footer ul {
      float: none;
    }
    footer .col100 {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    footer .m-col100 {
      max-width: 100%;
      padding-top: 40px;
      padding-bottom: 40px;
      float: none;
    }
    footer .m-col100 .col16 {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  footer .download-link {
    display: inline-block;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 0 4px;
  }
`;
