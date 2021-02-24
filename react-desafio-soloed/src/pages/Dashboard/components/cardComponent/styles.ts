import styled from 'styled-components';

export const Card = styled.div`
    height: 285px;
    width: 218px;
    margin-bottom: 50px;
    transition: 0.3s;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    @media screen and (max-width: 620px) {
    width: 80%;
    }
`

export const CardHeader = styled.div`
   
    display:flex;
    align-items:center;
    justify-content:center;

    img{
    max-width:180px;
    height:138px;
    }
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 6%;
    padding-right: 6%;
    justify-content: space-between;
`

export const ItemTitle = styled.p`
    width:124px;
    height:38px;
    margin: 0px 4px 8px 14px;
    display: inline-block;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
`

export const PriceBox = styled.div`
    background: #373737;
    border-radius: 5px;
    width:64px;
    height:26px;
    display:flex;
    align-items: center;
    justify-content: center;

    p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: #FFFF00;  
    }
`

export const Description = styled.p`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    padding:5%;
    color: #2C2C2C;
`


export const CardBtn = styled.button`
    margin-top: 21px;
    padding: 8px 0;
    border:none;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 0px 0px 8px 8px;
    font-size: 14px;
    background-color:#FFFF00;
    width:100%;
    

    P{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    }
`






