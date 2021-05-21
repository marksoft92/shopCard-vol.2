import React from "react";
import styled from "styled-components";
import H2 from "../components/h2/h2";
import StyledSpan from "./tag/styledSpan";
import svgSrc1 from '../images/hs_1.png';
import svgSrc2 from '../images/hs_2.png';
import svgSrc3 from '../images/hs_3.png';
import svgSrc4 from '../images/hs_4.png';

const data = [
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        svg: svgSrc1,
        price: '129,00 zł',
    },
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        svg: svgSrc2,
        price: '129,00 zł',

    },
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        svg: svgSrc3,
        price: '129,00 zł',

    },
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        svg: svgSrc4,
        price: '129,00 zł',

    },
];

const StyledDiv = styled.div`
&>div{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "1 3"
      "2 4 ";}
     &>div:nth-child(2){
        ${({ theme }) => theme.media.desktop}{
            display: flex;
            justify-content: space-evenly;
        };
     }
      
    &>div>div{
        display: flex;
    flex-direction: column;
    text-align: center;
    ${({ theme }) => theme.media.desktop}{
               
        display: flex;
        align-items: center;
        justify-content: center;
    };
    &>span:nth-child(3){
        font-weight:800;
        margin:10px 0;
    }
    };

`;

const OrthersProduct = () => (
    <StyledDiv>
        <H2>Przyda ci się również</H2>
        <StyledDiv>{
            data.map((item, i) => (
                <div order={i}>
                    <div>
                        <img src={item.svg}></img>
                        <StyledSpan>{item.title}</StyledSpan>
                        <StyledSpan>{item.price}</StyledSpan>
                    </div>

                </div>
            )
            )
        }
        </StyledDiv>
    </StyledDiv>
)
export default OrthersProduct;