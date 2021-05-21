import styled from "styled-components";


const H2 = styled.h2`
border-bottom:1px solid ${({ theme }) => theme.colors.white};
text-align: center;
padding-bottom:10px;
position:relative;

&:before{
    position: absolute;
    background: ${({ theme }) => theme.colors.darkYellow};
    height: 1px;
    content: '';
    width: 40%;
    bottom: -1px;
    left: 30%;
}
`;

export default H2;