import css from "styled-jsx/css";

export const quoteStyles = css.global`
  .text-section-quote_section,
  .quote {
    width: 33.333%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    margin-top:0;
  }
  .quote blockquote {
    font-size: 1.33333rem;
    line-height: 1.25em;
    font-weight: 300;
    display: block;
    position: relative;
    text-align: left;
    margin: 0 0 12px;
    padding-top: 24px;
  }
  .alternateGrid-t p em {
    quotes: "\201C" "\201D" "\2018" "\2019";
}
  .alternateGrid-t p em {
    font-size: 1.33333rem;
    line-height: 1.25em;
    font-weight: 300;
    display: block;
    position: relative;
    text-align: left;
    margin: 0 0 12px;
    padding-top: 24px;
    font-style: normal;
    margin-left: 55px;
  }
  .alternateGrid-t p em:before {
    color: #e9e9e9;
    content: "“";
    font-size: 120px;
    font-weight: 300;
    line-height: 0.9;    
    vertical-align: -0.3em;
    position: absolute;
    top: 26px;
    left: -60px;
    color: #e6ebf0;
}
  
  .quote blockquote:before {
    
    color: #e9e9e9;
    content: "“";
    font-size: 120px;
    font-weight: 300;
    line-height: 0.9;    
    vertical-align: -0.3em;
    position: absolute;
    top: 26px;
    left: -60px;
    color: #e6ebf0;
  }
  .text-section-quote_section p,
  .quote p {
    font-size: 0.83333rem;
    font-weight: 400;
    font-style: normal;
    margin-left: 25px;
    margin-top: 16px;
  }
  .text-section-quote_section .block-img {
    width: 100%;
    margin-left: -25px;
  }
  .quote {
    max-width: 460px;
  }
  @media (max-width: 767px) {
    .quote {
      font-size: 20px;
    }
    .quote ,.text-section-quote_section{
    max-width: 89.3%;
width: 100%;
}
.text-section-quote_section p {
   
    margin-left: 40px;
    
}
.quote blockquote {    
    margin: 0 0 0 40px;
}
.quote blockquote::before {   
    left: -47px;
}
}
`;
