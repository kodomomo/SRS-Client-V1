import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
* {
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-select: text;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    html, body {
    width: 100%;
    height: 100%;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    input {
    &:-webkit-autofill {
    box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.8) inset;
    }
    border: solid 1px rgba(121, 194, 202, 0.5);
    border-radius: 5px;
    &[type=password] {
    font-family: sans-serif;
    }
    &:focus {
    outline: none;
    }
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    a {
    color: #000;
    text-decoration: none;
    }
    .rotate{
    transform: rotate(180deg);
    }

    .btn{
    display: inline-block;
    transition: 0.5s;
    }
    .react-pdf__Page {
    position: unset !important;
    }
}

.wrapper {
    display: flex;
    justify-content: center;
    background-color: #F3F3F3;
  > div {
    width: 100%;
    max-width: 500px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    background-color: white;
  }
}
`;

export default global;
