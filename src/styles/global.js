import {createGlobalStyle } from 'styled-components';

const Global =  createGlobalStyle `

* {
  margin: 0;
 padding: 0,
}

body {
  font-family: 'Poppins', Sans-Serif;
  background-color: #f2f2f2;
  background: rgb(36,38,54);
}

#root {
  background: rgb(36,38,54);
  margin: 20px;
  color: #6a6969;
}
`;

export default Global;