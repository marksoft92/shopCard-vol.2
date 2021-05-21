import styled from "styled-components";

const BtnCard = styled.button`
color:white;
font-size: 10px;
border: solid 2px #C3C7C8;
height: 20px;
width: 70px;
border: solid 2px ${({ theme }) => theme.colors.darkBlue} ;
text-decoration: none;
background: ${({ theme }) => theme.colors.darkBlue};
border-radius: 20px;
justify-content: space-around;
align-items: center;
`;
export default BtnCard;
