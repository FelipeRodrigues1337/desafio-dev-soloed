import styled from 'styled-components';

export const ProductListCard = styled.li`
    margin-top: 28px;
    width: 379px;
    height: 95px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    list-style-type: none;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-evenly;

    img{
        max-height: 61px;
        max-width: 61px;
    }

    p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #2C2C2C;
    }

    div{
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    box-sizing: border-box;
    border-radius: 4px;  
    display:flex;
    }

    button{
    height: 19px;
    width: 16px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    }

    input{
        width: 18px;
        border: none;
        outline: 0;
    }
`
export const RemoveButton = styled.button`  
        border: none; 
        color: #000000;
        width: 38px;
        height: 38px;
`





