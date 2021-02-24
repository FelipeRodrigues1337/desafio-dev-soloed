import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    height: 100%;
}

body,input,button{
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
}

#root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button{
    cursor: pointer;
}
`