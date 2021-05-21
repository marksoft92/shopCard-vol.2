import React from "react";
import styled from "styled-components";
import box from "../images/photo_1.png";
import DescriptionBox from "./box/boxDescription";
import ComponentBox from "./box/boxVariants";
const Container = styled.div`
background: ${({ theme }) => theme.colors.white};
`;

const ContainerData = styled.div`
${({ theme }) => theme.media.desktop}{
    display:flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
}
`;

const BoxImages = styled.div`
background: ${({ theme }) => theme.colors.light};
display:flex;
padding:0 70px;
`;

const BoxData = styled.div`
background: ${({ theme }) => theme.colors.light};
${({ theme }) => theme.media.desktop}{
    padding:10px
}
`;

const BoxVariants = styled.div`
background: ${({ theme }) => theme.colors.light}
`;

const StyledSpan = styled.span`
display:none;
${({ theme }) => theme.media.desktop}{
    display:block;
    padding:10px;
}

`;
const CardImages = styled.div`
display:none;
${({ theme }) => theme.media.desktop}{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    &>img{
        width:100px;
    }
}`;
const CardImage = styled.div`
display:flex;`;
const H6 = styled.h6`
font-weight:300;
font-size:30px;
margin: 0 0 10px 0;
padding:10px 0 0 10px;
`;
const BoxContent = () => (

    <Container>
        <StyledSpan>Strona główna  /  Dziecko  /  Zastawa stołowa  /  Bambusowe Naczynia dla dzieci</StyledSpan>
        <ContainerData>
            <BoxImages>
                <CardImages>
                    <img src={box}></img>
                    <img src={box}></img>
                    <img src={box}></img>
                    <img src={box}></img>
                </CardImages>
                <CardImage><img src={box}></img></CardImage>
            </BoxImages>
            <BoxData>
                <H6>Bambusowe Naczynia <br /> dla Dzieci Ambition Junior Alex</H6>
                <DescriptionBox></DescriptionBox>
            </BoxData>
        </ContainerData>
        <BoxVariants>
            <H6>Dostępne warianty</H6>
            <ComponentBox></ComponentBox>
        </BoxVariants>
    </Container>

)





export default BoxContent;