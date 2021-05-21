import styled from "styled-components";


const BtnBasket = styled.button`
display:flex;
color:white;
font-size: 10px;
border: solid 2px #C3C7C8;
height: 35px;
width: 100px;
border: solid 2px ${({ theme }) => theme.colors.darkBlue} ;
text-decoration: none;
background: ${({ theme }) => theme.colors.darkBlue};
border-radius: 20px;
justify-content: space-around;
align-items: center;
background: white;
    color:black;
    border:none;

    ${({ theme }) => theme.media.desktop}{
        background:${({ theme }) => theme.colors.darkBlue};
        border: solid 2px ${({ theme }) => theme.colors.darkBlue} ;
        border-radius:50px;
        display:flex;
        color:${({ theme }) => theme.colors.light}; 
       };
`;

export default BtnBasket;