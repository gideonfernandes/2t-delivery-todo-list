import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, input, button {
    font-family: Poppins, sans-serif;
    border: 0;
  }

  html {
    min-height: 100%;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #663399;
    --secondary: #12BC98;
    --dark-gray: #333;
    --gray: #CCC;
    --light-gray: #F4F1F1;
    --placeholder: #AAA;
    --white: #FFF;
    --red: #C33111;
  }
`;
