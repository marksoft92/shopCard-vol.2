import React from "react";
import styled from "styled-components";
import H2 from "../components/h2/h2";
import BtnCard from "./buttons/btnCard";
import StyledSpan from "./tag/styledSpan";
import questionSvg from "../images/fontello/question.svg";

const StyledDiv = styled.div`

&.isMobile{
    ${({ theme }) => theme.media.desktop}{
        display:none;
    }
};
&.isDesktop{
    display:none;
    ${({ theme }) => theme.media.desktop}{
        display:flex;
    }
};
    display:flex;
    flex-direction: column;
    &>div{
        display: flex;
        justify-content: space-between;
        margin:20px 0;
        &>div:nth-child(2){
            display:flex;
        }
        &>div:nth-child(2)>div{
            width: 40%;
            background:${({ theme }) => theme.colors.gray};
            padding:10px;
            display:flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            &>h6{
                font-size:15px;
                height:0px;
            };
            &>button{
                height:30px;
                width:200px;
                background:none;
                color:${({ theme }) => theme.colors.darkBlue};
                font-weight:700;
            };
            
        }
        &>div:nth-child(2)>div:nth-child(2){
            width:120px;
        }
    };
   
`;
const StyledP = styled.p`
font-weight:800;
&:nth-child(2){
    border-top:1px solid ${({ theme }) => theme.colors.gray};
    padding-top:10px;
};
&:nth-child(3){
    border-top:1px solid ${({ theme }) => theme.colors.gray};
    padding-top:10px;
};
&>p>span{
    font-weight:300;
    font-size:12px;
};

`;
const Question = () => (
    <>
        <StyledDiv className="isMobile">
            <div>
                <StyledSpan>Nasi klienci najczęściej pytali o</StyledSpan>
                <StyledSpan>+</StyledSpan>
            </div>
            <div>
                <StyledSpan>Opinie o miseczka bambusowa myszka dla dzieci</StyledSpan>
                <StyledSpan>+</StyledSpan>
            </div>
        </StyledDiv>
        <StyledDiv className="isDesktop">

            <H2>Nasi klienci najczęściej pytali o:</H2>
            <div>
                <div>
                    <StyledP>
                        Czy te miseczki mają atesty bezpieczeństwa?
                        <p><StyledSpan>Tak jest bardzo wytrzymałe. Wcodzienny użytkowaniu, nie powinno nic się zdarzyć</StyledSpan></p>
                    </StyledP>
                    <StyledP>Czy te produkty są w 100% ekologiczne?</StyledP>
                    <StyledP>Czy miseczki nie uczulą 6 miesięcznego dziecka?</StyledP>
                </div>
                <div>
                    <div>
                        <h6>Masz pytanie na temat tego produktu</h6>
                        <StyledSpan>Nasi specjaliści cętnie udzielą ci potrzebnych informacji</StyledSpan>
                        <BtnCard>Zadaj pytanie</BtnCard>
                    </div>
                    <div>
                        <img src={questionSvg}></img>
                    </div>
                </div>
            </div>
            <div>
                <H2>Opinie o miseczka bambusowa myszka dla dzieci</H2>
            </div>
        </StyledDiv>
    </>
)
export default Question;