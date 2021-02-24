import styled from 'styled-components';


export const Header = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 101px;
    left: 0px;
    top: 0px;
    background-color: #FFFF00;
`;

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4%;

    img{
    position: absolute;
    width: 117px;
    height: 31px;
    left: 67px;
    top: 35px;
    }

    p{
    font: Montserrat, sans-serif;
    position:absolute;
    width: 43px;
    height: 16px;
    left: 188px;
    top: 50px; 
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 15px;
    }
`
export const DivButton = styled.button`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    width: 90px;
    height: 45px;
    left: 1262px;
    top: 29px;
    margin-right: 10%;
    border-radius: 8px;
    background-color: #000000;

    &:hover{
    background-color: #262323;
    }

    img{
    width:19.01px;
    height:18px;
    }

    p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color:#FFFF00;
    }
`
export const Row = styled.div`
    margin-top: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    height:100%;
`
export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EEEEEE;
    height:34px;
    width: 100%;
    position: fixed;
    bottom:0;
    left:0;

    p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #000000; 
    }
`

export const Sidebar = styled.div`
    position: fixed;
    top:0;
    right:0;
    margin:0;
    padding: 50px 20px;
    box-sizing: border-box;
    width: 486px;
    height: 100vh;
    background: #FFFF00;
    transition: 0.5s;
    z-index: 100000;
    overflow-y: auto;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display:block;
`
export const SidebarBox = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

export const SidebarContent = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;

    p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 33px;
    color: #000000;
    }

    button{
        background-color: #000000;
        border: none;
        border-radius: 50%;
        color: #FFFF00;
        width: 38px;
        height: 38px;
    }
`

export const Ul = styled.ul`
    display:flex;
    align-items:center;
    flex-direction: column;
`