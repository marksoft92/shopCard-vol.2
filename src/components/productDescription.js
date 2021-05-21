import React from "react";
import styled from "styled-components";
import H2 from "../components/h2/h2";
import StyledSpan from "./tag/styledSpan";
import BtnOfferts from "../components/buttons/btnCard";
import download from "../images/fontello/download.svg"
import productImg from "../images/hs_2.png"
import productImg_1 from "../images/photo_1.png"
import productImg_2 from "../images/photo_3b.png"
import ellipseBlue from "../images/Ellipse_19.svg";
import StyledA from "../components/tag/styledA";

const StyledDiv = styled.div`
${({ theme }) => theme.media.desktop}{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
};
&>div{
    display:flex;
    justify-content:space-evenly;
    align-items: center;

    &>img:nth-child(1){
        width:200px;
    };
    &>img:nth-child(2){
        width:50px;
    };
    &>img:nth-child(3){
        height:150px;
    };
    
};
&>div:nth-child(2){
    flex-direction: column;
    text-align:center;
    ${({ theme }) => theme.media.desktop}{
        display:flex;
    };
    &>span{
        margin-bottom:5px;
        ${({ theme }) => theme.media.desktop}{
            display:flex;
          text-align:left;  
        };
    }
};
&>p{
    display:flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.media.desktop}{
        display:flex;
        flex-direction: row;
    };
    &>span:nth-child(2){
        font-weight:800;
    };
    &>button{
        width:200px;
        padding:10px;
        margin:3px;
        font-size:15px;
        height:100%;
        color:${({ theme }) => theme.colors.darkBlue};
        border-radius:50px;
        font-weight:700;
        background:none;
        border:2px solid ${({ theme }) => theme.colors.darkBlue};
        ${({ theme }) => theme.media.desktop}{
            height:30px;
            padding:0;
        };
    };
}

`;

const SpecificationDiv = styled.div`
&>div>p{
    display:flex;
    justify-content: space-between;
    ${({ theme }) => theme.media.desktop}{
       justify-content: space-evenly;
    };
};
&>div>p>span:nth-child(2){
   font-weight:700;
  margin-right;50px;
};
&>div:nth-child(3){
    ${({ theme }) => theme.media.desktop}{
           
        display: flex;
        align-items: flex-start;
        justify-content: center;
    };};
&>div{
    &>span{
    font-weight:700;
    display:flex;
    margin-bottom:15px;
    };
    &>img{
        margin:0 15px;
    }
}
`;
const StyledImg = styled.img`
margin: 0 auto;
display: flex;
${({ theme }) => theme.media.desktop}{
    width:50%;
};
`;

const ProductDescription = () => (
    <div>
        <H2>W zestawie kupisz taniej</H2>
        <StyledDiv>
            <div>
                <img src={productImg_1}></img>
                <img src={ellipseBlue}></img>
                <img src={productImg_2}></img>
            </div>
            <p>
                <StyledSpan>Cena produktów poza zestawem 199,00zł</StyledSpan>
                <span> 149,00 zł / zestaw</span>
                <BtnOfferts>ZOBACZ OFERTĘ</BtnOfferts>
            </p>

        </StyledDiv>
        <StyledDiv>
            <StyledImg src={productImg}></StyledImg>
            <StyledDiv>
                <H2>Zestaw naczyń bambusowych dla dzieci Alex Ambition Junior</H2>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
                <StyledSpan> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</StyledSpan>
            </StyledDiv>
        </StyledDiv>
        <SpecificationDiv>
            <H2>Specyfikacja</H2>
            <div>
                <p><StyledSpan>Producent</StyledSpan><StyledA>Ambition</StyledA></p>
                <p><StyledSpan>Gwarancja</StyledSpan><StyledSpan>2 lata</StyledSpan></p>
                <p><StyledSpan>Przeznaczenie</StyledSpan><StyledSpan>przedszkola, dzieci złobkowe</StyledSpan></p>
                <p><StyledSpan>Wymiar</StyledSpan><StyledSpan>33m2(aham cadr -15m2)</StyledSpan></p>
                <p><StyledSpan>Materiał</StyledSpan><StyledSpan>aluminium</StyledSpan></p>
                <p><StyledSpan>Zużycie energi(w)</StyledSpan><StyledSpan>4-40</StyledSpan></p>
                <p><StyledSpan>Zasilanie</StyledSpan><StyledSpan>230v/50hz</StyledSpan></p>
                <p><StyledSpan>ilość trybów pracy</StyledSpan><StyledSpan>4</StyledSpan></p>
                <p><StyledSpan>Czujnik ruchu</StyledSpan><StyledSpan>z czujnikiem</StyledSpan></p>
            </div>
            <div>
                <StyledSpan>Pliki do pobrania:</StyledSpan>
                <img src={download}></img>
                <StyledA href="">Katalog producenta</StyledA>
                <img src={download}></img>
                <StyledA href="">Instrukcja obsługi</StyledA>
            </div>
        </SpecificationDiv>
    </div>
)





export default ProductDescription;