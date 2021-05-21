
import React from "react";
import styled from "styled-components";
import blackEllipse from "../../images/Ellipse_13.svg";
import grayEllipse from "../../images/Ellipse_17.svg";
import blueEllipse from "../../images/Ellipse_19.svg";
import boxImg from "../../images/fontello/box_(2).svg";
import shippedImg from "../../images/fontello/shipped_(2).svg";
import shoppingCart from "../../images/fontello/shopping-cart.svg";
import BtnCard from "../buttons/btnCard";
import StyledA from "../tag/styledA";

const StyledP = styled.p`
font-weight:700;
margin: 0;
:nth-child(3){
    margin:10px 0;
},
`;
const BoxColors = styled.div`
    & > img {
        margin:0 10px 10px 0;
        padding:2px;
        border: 1px solid ${({ theme }) => theme.colors.gray};
            border-radius:50px;
        :hover{
            border: 1px solid ${({ theme }) => theme.colors.black};
            border-radius:50px;
        }
       
    }
`;
const StyledSpan = styled.span`
margin: 0 5px;
font-weight:700;
&.graySpan{
    color:${({ theme }) => theme.colors.gray};
    text-decoration: line-through;
};
&.promotionSpan{
    font-size:20px;
    background:${({ theme }) => theme.colors.darkYellow};
    border-radius:15px;
    color:white;
    padding:5px 10px;
}
`;
const StyledDiv = styled.div`
margin:10px 0 0 0;
&.aboutShippedDiv{
    border-top:1px solid ${({ theme }) => theme.colors.white};
    border-bottom:1px solid ${({ theme }) => theme.colors.white};
    padding:10px 0;

    &>div>img{
        paddig:10px;
        margin-right:10px;
        width:15px;
        color:red;
    };
};
&.divAddProduct{
    display:flex;
    align-items: center;
    &>nth-child(2){
display:block;
    };
};
&>span:nth-child(1){
    font-size:30px;
};
&>img {
    height:40px;
    padding:10px;
};
&>button{
    width:80%;
    padding:10px;
    margin:3px;
    font-size:15px;
    height:100%;
    border-radius:50px;
    font-weight:700;
}
`;


const DescriptionBox = () => (
    <>
        <StyledP>11111111111111111</StyledP>
        <StyledP>Kolory</StyledP>
        <BoxColors>
            <img src={blackEllipse}></img>
            <img src={grayEllipse}></img>
            <img src={blueEllipse}></img>
        </BoxColors>
        <StyledP>Dostępny 3szt na magazynie</StyledP>
        <StyledA href="">Sprawdź czas i koszt dostawy</StyledA>
        <StyledDiv>
            <StyledSpan> 29,00</StyledSpan>
            <StyledSpan> zł / szt.</StyledSpan>
            <StyledSpan className="graySpan"> 39.00 zł</StyledSpan>
            <StyledSpan className="promotionSpan">PROMOCJA</StyledSpan>
            <div><StyledA href="">Kup na raty</StyledA></div>
        </StyledDiv>
        <StyledDiv className="divAddProduct">
            <img src={grayEllipse}></img>
            <BtnCard>DODAJ DO KOSZYKA</BtnCard>
        </StyledDiv>
        <div><StyledA href="">Do listy zakupowej</StyledA></div>
        <StyledDiv className="aboutShippedDiv">
            <div>
                <img src={boxImg}></img>
                <StyledSpan>Łatwy zwrot towaru w ciągu 14 dni</StyledSpan>
            </div>
            <div>
                <img src={boxImg}></img>
                <StyledSpan>Darmowa dostawa od 599zł</StyledSpan>
            </div>
            <div>
                <img src={shippedImg}></img>
                <StyledSpan>Szybka Dostawa w 48h</StyledSpan>
            </div>
        </StyledDiv>
    </>
)





export default DescriptionBox;



