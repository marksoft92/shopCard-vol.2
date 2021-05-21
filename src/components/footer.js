import React from "react";
import styled from "styled-components";
import StyledSpan from "./tag/styledSpan";
import svgSrc2 from "../images/fontello/truck.svg";
import svgSrc1 from "../images/fontello/battery-level.svg";
import svgSrc3 from "../images/fontello/sad.svg";
import svgSrc4 from "../images/fontello/dollar-symbol.svg";
import svgSrc5 from "../images/fontello/box-2.svg";
import svgSrc6 from "../images/fontello/register.svg";
import svgSrc7 from "../images/fontello/menu.svg";
import svgSrc8 from "../images/fontello/basket.svg";
import svgSrc10 from "../images/fontello/clock.svg";
import svgSrc9 from "../images/fontello/star.svg";
import svgSrc11 from "../images/fontello/cut.svg";
import svgSrc12 from "../images/fontello/mail.svg";
import svgFacebook from "../images/fontello/facebook-circular-logo_(2).svg"
import svgInsta from "../images/fontello/instagram_(7).svg"
const data = [
    {
        title: 'Status zamówienia',
        svg: svgSrc1,
    },
    {
        title: 'Śledzenie przesyłki',
        svg: svgSrc2,
    },
    {
        title: 'Chcę zareklamować towar',
        svg: svgSrc3,
    },
    {
        title: 'Chcę zwrócić towar',
        svg: svgSrc4,
    },
    {
        title: 'Chcę wymienić towar',
        svg: svgSrc5,
    },
];

const data1 = [
    {
        title: 'Zarejestrój się',
        svg: svgSrc6,
    },
    {
        title: 'Moje zamówienia',
        svg: svgSrc7,
    },
    {
        title: 'Koszyk',
        svg: svgSrc8,
    },
    {
        title: 'Ulubione',
        svg: svgSrc9,
    },
    {
        title: 'Historia transakcji',
        svg: svgSrc10,
    },
    {
        title: 'Moje rabaty',
        svg: svgSrc11,
    },
    {
        title: 'Newsletter',
        svg: svgSrc12,
    },
];
const data2 = [
    {
        title: 'Informacje o sklepie',
    },
    {
        title: 'wysyłka',
    },
    {
        title: 'Sposoby płatności i prowizji',
    },
    {
        title: 'Regulamin',
    },
    {
        title: 'Polityka prywatności',
    },
    {
        title: 'Odstąpienie od umowy',
    },
];

const H6 = styled.h6`
font-size:20px;
${({ theme }) => theme.media.desktop}{
    margin:0;
};
`;

const StyledP = styled.p``;

const StyledDiv = styled.div`
${({ theme }) => theme.media.desktop}{
    height: 25vw;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    text-align: inherit;
};
text-align:center;
color:white;
align-items: center;
display:flex;
flex-direction:column;
    background:${({ theme }) => theme.colors.darkBlue} ;
    margin:0 auto;
    &>div:nth-child(1){

        &>p>img{
            display:none;
            ${({ theme }) => theme.media.desktop}{
                display:inline;
                margin-right:10px;
            }
                
        }
    };
    &>div:nth-child(2){
        height:30px;
        &>p{
            display:none;
            ${({ theme }) => theme.media.desktop}{
                display:block;
            }
        };
        &>p>img{
           
            ${({ theme }) => theme.media.desktop}{
                display:inline;
                margin-right:10px;
            }
                
        };
    };
    &>div:nth-child(3){
        height:30px;
        &>p{
            display:none;
            ${({ theme }) => theme.media.desktop}{
                display:block;
            };
        };
    };
`;

const Footer = () => (
    <StyledDiv>
        <div>
            <H6>Moje zamówienia</H6>
            {
                data.map((item, i) => (
                    <StyledP order={i}>
                        <img src={item.svg}></img>
                        <StyledSpan>{item.title}</StyledSpan>
                    </StyledP>
                )
                )
            }
        </div>

        <div>
            <H6>Moje Konto</H6>
            {
                data1.map((item, i) => (
                    <StyledP order={i}>
                        <img src={item.svg}></img>
                        <StyledSpan>{item.title}</StyledSpan>
                    </StyledP>
                )
                )
            }
        </div>

        <div>
            <H6>Regulaminy</H6>
            {
                data2.map((item, i) => (
                    <StyledP order={i}>
                        <img></img>
                        <StyledSpan>{item.title}</StyledSpan>
                    </StyledP>
                )
                )
            }
        </div>

        <div>
            <H6>Informacje</H6>
            <div>
                <img src={svgFacebook}></img>
                <img src={svgInsta}></img>
            </div>
            <H6><p>575848808</p></H6>
            <H6><p>sklepflikos.pl</p></H6>
            <p><StyledSpan>pn-pt 8.00 - 16.00</StyledSpan></p>
            <p><StyledSpan>sb 8.00 - 14.00</StyledSpan></p>
        </div>

    </StyledDiv>
)





export default Footer;