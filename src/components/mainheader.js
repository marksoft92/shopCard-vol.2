import React from "react";
import styled from "styled-components";
import MainHeaderBtn from "../components/buttons/button";
import BtnBasket from "../components/buttons/btnbasket";
import logo from '../images/logo.svg';
import search from '../images/fontello/search.svg';
import basket from '../images/fontello/basket.svg';

const Input = styled.input.attrs(props => ({
    type: "text",
}))`
    font-size: 10px;
   text-decoration:none;
   border:none;
   background:none;
   font-weight:700;
   height:20px;
   display:none;
   ${({ theme }) => theme.media.desktop}{
       display:block;
   };
  `;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
    ;

const StyledSpan = styled.span`
display:none;
${({ theme }) => theme.media.desktop}{
    display:block;
}
    
    `;
const StyledImg = styled.img`
    
    `;
const StyledDiv = styled.div`
text-decoration: none;
display:flex;

justify-content: space-around;
background:none;
border:none;
  
${({ theme }) => theme.media.desktop}{
    background:${({ theme }) => theme.colors.gray};
    border: solid 2px ${({ theme }) => theme.colors.gray} ;
    border-radius:50px;
  }
`;
const MainHeader = () => {
    return (
        <StyledContainer>
            <StyledImg src={logo} alt="" />
            <StyledDiv>
                <Input placeholder="A bigger text input" />
                <img src={search} alt="" />
            </StyledDiv>
            <MainHeaderBtn>ZALOGUJ SIĘ</MainHeaderBtn>

            <MainHeaderBtn>LISTA ZAKUPOWA</MainHeaderBtn>
            <BtnBasket>
                <img src={basket} alt="" />
                <StyledSpan>348,00 zł</StyledSpan>
            </BtnBasket>
        </StyledContainer>)
}





export default MainHeader;