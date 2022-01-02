import css from "styled-jsx/css";

export const globals = css.global`
* {
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: #FFF7C7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #FFF7C7; /* Gecko Browsers */
}

/*
* Globals
*/

@font-face {
  font-family: "Ed Sans Neue";
  font-display: swap;
  src: url(https://www.edapp.com/fonts/edsansneue-regular.v1.004.eot);
  src: url(https://www.edapp.com/fonts/edsansneue-regular.v1.004.eot?#iefix)
      format("embedded-opentype"),
    url(https://www.edapp.com/fonts/edsansneue-regular.v1.004.woff2) format("woff2"),
    url(https://www.edapp.com/fonts/edsansneue-regular.v1.004.woff) format("woff"),
    url(https://www.edapp.com/fonts/edsansneue-regular.v1.004.otf) format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Ed Sans Neue";
  font-display: swap;
  src: url(https://www.edapp.com/fonts/edsansneue-semibold.v1.004.eot);
  src: url(https://www.edapp.com/fonts/edsansneue-semibold.v1.004.eot?#iefix)
      format("embedded-opentype"),
    url(https://www.edapp.com/fonts/edsansneue-semibold.v1.004.woff2) format("woff2"),
    url(https://www.edapp.com/fonts/edsansneue-semibold.v1.004.woff) format("woff"),
    url(https://www.edapp.com/fonts/edsansneue-semibold.v1.004.otf) format("opentype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Ed Sans Neue";
  font-display: swap;
  src: url(https://www.edapp.com/fonts/edsansneue-bold.v1.004.eot);
  src: url(https://www.edapp.com/fonts/edsansneue-bold.v1.004.eot?#iefix) format("embedded-opentype"),
    url(https://www.edapp.com/fonts/edsansneue-bold.v1.004.woff2) format("woff2"),
    url(https://www.edapp.com/fonts/edsansneue-bold.v1.004.woff) format("woff"),
    url(https://www.edapp.com/fonts/edsansneue-bold.v1.004.otf) format("opentype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Ed Sans Neue";
  font-display: swap;
  src: url(https://www.edapp.com/fonts/edsansneue-regularitalic.v1.004.eot);
  src: url(https://www.edapp.com/fonts/edsansneue-regularitalic.v1.004.eot?#iefix)
      format("embedded-opentype"),
    url(https://www.edapp.com/fonts/edsansneue-regularitalic.v1.004.woff2) format("woff2"),
    url(https://www.edapp.com/fonts/edsansneue-regularitalic.v1.004.woff) format("woff"),
    url(https://www.edapp.com/fonts/edsansneue-regularitalic.v1.004.otf) format("opentype");
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: "Ed Sans Neue";
  font-display: swap;
  src: url(https://www.edapp.com/fonts/edsansneue-light.v1.004.eot);
  src: url(https://www.edapp.com/fonts/edsansneue-light.v1.004.eot?#iefix)
      format("embedded-opentype"),
    url(https://www.edapp.com/fonts/edsansneue-light.v1.004.woff2) format("woff2"),
    url(https://www.edapp.com/fonts/edsansneue-light.v1.004.woff) format("woff"),
    url(https://www.edapp.com/fonts/edsansneue-light.v1.004.otf) format("opentype");
  font-weight: 300;
  font-style: normal;
}

body {
  padding: 0;  
  font-family: "Ed Sans Neue","Helvetica Neue",Arial,sans-serif;
  font-size: 18px; 
  color: #1f2e3c;
  line-height: 1.6;
}
main,.over{overflow: hidden;}
a {
  color: #72767B;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.35;
  line-height: 28px;
  text-decoration: none;
}
.primary-color{color: #1f2e3c;}
p a {
  text-decoration: underline;
}
hr {
    outline: 0;
    border: none;
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: medium;
    border-top: 1px solid #e6ebf0;
}
.block-v-lg {
    padding-top: 80px;
    padding-bottom: 80px;
}
.btn, .industry-section .signup-btn, button, input {
    display: inline-block;
    padding: .3em 1em;
    border-radius: 5px;
    border: none;
    transition: background-color .3s;
    text-shadow: none;
    box-sizing: border-box;
}

h1 {  
  font-size: 2rem;
  line-height: 1.2em;
  font-weight: 300; 
  letter-spacing: 0;
  margin: 0 0 .5em;
  
}
small {
    font-size: .83333rem;
}
.text-muted {
    color: #848f9d;
}
blockquote:last-child, fieldset:last-child, h3:last-child, h4:last-child, h5:last-child, li:last-child, ol:last-child, p:last-child, ul:last-child {
    margin-bottom: 0;
}
.text-section-1col h2
{border-bottom: 1px solid #e6ebf0;  
max-width: 300px;
margin: 0px auto;
width: 100%;
padding-bottom: 40px;}
.pt40{padding-top:40px;}
.plr20{padding-left:20px;padding-right:20px;}
h2{
  font-size: 1.55556rem;
line-height: 1.25em;
margin: 0 0 12px;
font-weight: 300;
text-align: center;
text-rendering: geometricPrecision;
-webkit-text-size-adjust: none;
}
 h2 a {
  
  margin-bottom: 1rem;
  color: #484d52;
  font-size: 32px;
  font-weight: 700;
  letter-spacing : 0.85;
  line-height: 42px;
}
h3, h3 a {
  margin-bottom: 1rem;
  Color: #484d52;
  font-size: 20px;
  font-weight: 400;
  letter-spacing : 0.52;
  line-height: 34px;
}
p {
  margin: 0 0 12px;
}
.text-center {
    text-align: center;
}
img {
    vertical-align: middle;
    border: none;
}
.img-circle {
    border-radius: 50%;
}
.block-v-sm {
    padding-top: 16px;
    padding-bottom: 16px;
}
pre, ul {
  margin-bottom: 20px;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
img {
  max-width: 100%;
}
.container, footer {
  max-width: 1080px;
  margin: auto;
}
.content-section {
  margin-bottom: 80px;
  margin-top: 80px;
}
.quote blockquote {
  quotes: "\201C" "\201D" "\2018" "\2019";
}

@media (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 40px;
    margin-top: 40px;
  }
}

.logo {
    display: block;
    overflow: hidden;
    background-image: url(images/ed-logo-128x128.png);
    background-size: 100%;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    transition: all .3s;
    z-index: 2;
position: relative;
}
.logo::before {
    content: "";
    display: block;
    background-image: url(images/ed-logo-sticker-128x128.png);
    background-size: 100%;
    width: 40px;
    height: 40px;
    opacity: 0;
    transition: opacity .3s;
}
.logo:hover::before {
    opacity: 1;
}

.alternateGrid
{    padding-top: 80px;
    padding-bottom: 80px;
  background-position: center;
    background-size: cover;
  position: relative;
  overflow: auto;
}
.text-center {
    text-align: center;
}
.alternateGrid-t {
    width: 41.66667%;
    
}
.alternateGrid h2{
  color: #000;
  font-size: 1.55556rem;
line-height: 1.25em;
margin: 0 0 12px;
}
.col {
    position: relative;
    display: block;
    min-height: 1px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
}
 iframe {
   max-width:83.33333%;    
    width: 100%;
    height: 100%;
    min-height:480px;
}

.center{
  margin-left:auto;
  margin-right:auto;
}


.col100
{
  width: 100%;
}
.col50 {
    width: 50%;
}
.col66 {
    width: 66.66667%;
}
.col33 {
    width: 33.33333%;
}
.col80 {
    width: 80%;
}
.col18 {
    width: 18%;
}
.col46{width:46%;}
.mar16{
  margin: 16px;
}
.padding0{padding:0px !important;}
.fright{float:right;}
.fleft{float:left;}
@media (min-width: 768px) {
.col-md-offset-2 {
    margin-left: 16.66667%;
}
}
@media (max-width: 767px) {
  .col50,.col66 ,.col33{
    width: 100%;
}
}
.thighlight em {
    quotes: "\201C" "\201D" "\2018" "\2019";
}
.thighlight em
{
  font-size: 1.33333rem;
line-height: 1.25em;
font-weight: 300;
display: block;
position: relative;
text-align: left;
margin: 0 0 12px;
    margin-left: 0px;
padding-top: 24px;
font-style: normal;
margin-left: 55px;
}
.thighlight em::before {
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
.block-dark {
    background-color: #152231;
    color: #fff;
}

.calltoaction h2 {
  max-width: 440px;
  margin: 0 auto;
  font-size: 2rem;
line-height: 1.2em;
}
.calltoaction .signup-btn {    
    width: 335px;
    max-width: 90%;
    font-size: 1.16667rem;
line-height: 1.2em;
background-color: #46b4e9;
    background-image: linear-gradient(#46b4e9,#0070af);
    color: #fff;
    padding-top: 15px;
padding-bottom: 15px;
display:flex;
font-weight: 600;
text-align:center;
margin:40px auto 0 auto;
border-radius: 5px;
border: none;
transition: background-color .3s;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
text-shadow: none;
box-sizing: border-box;
}
.calltoaction .signup-btn:hover
{
  background-color: #46b4e9;
background-image: linear-gradient(#46b4e9,#005788);
color: #fff;
text-decoration: none;
background-color: rgba(255,255,255,.2);
text-shadow: 0 0 5px rgba(255,255,255,.3);
}
.calltoaction p{
width:100%;
}
.calltoaction .signup-bottom a {
    text-decoration: none;
    color: #46b4e9;
}
.calltoaction .signup-bottom p
{
  text-align: center;
margin-top: 10px;
}
.col-md-offset-0 {
    margin-left: 0;
}
.cards_carousel img{max-width: 160px;}
.card h3 {
    font-size: 1.16667rem;
    line-height: 1.34em;
    font-weight: 300;
    color: #1f2e3c;
}
.block-smoke {
    background-color: #f8f9fa;
    color: #1f2e3c;
}
.explore-more img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 50%;
}
.explore-more .card {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 4px #e0e8f1;
    box-shadow: 0 1px 5px rgba(0,0,0,.12);
}
.card-content {
    min-height: 92px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transition: color .3s;
    line-height: 1.2;
}
.explore-more .card-blog {
    position: relative;
    overflow: hidden;
    height: 92px;
}
.explore-more  a {font-weight: 600;cursor: pointer;color: #1f2e3c;text-align: left;}
.explore-more  a:hover {
    color: #46b4e9;
}
.explore-more h5 {color: #848f9d;text-transform: uppercase;font-size: .83333rem;letter-spacing: .016em;font-weight: 700;}
.explore-more{margin-bottom: -80px;}
.explore-more p{line-height: 1.2;}

@media (max-width: 767px) {
.alternateGrid:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: inherit;
    opacity: .7;
}
.alternateGrid-t {
max-width: 89.3%;
width: 100%;
margin: 0px auto;
display: block;
float: none!important;
padding-left: 0px;
padding-right: 0px;
}
iframe {    
    min-height: 166px;
}
.calltoaction h2 {max-width: 89.3%;
width: 100%;}
.alternateGrid {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #152231;
color: #fff;
}
.alternateGrid h2 {
    color: #fff;
}
.col46 {
    width: 100%;
    max-width: 89.3%;
}
.col18 {
    width: 100%;
}
.col16 {
    width: 100%;
    
}
.block-v-lg {
    padding-top: 40px;
    padding-bottom: 40px;
}
.col80 {
   width: 65%;
right: 15px;
}
}

`;
