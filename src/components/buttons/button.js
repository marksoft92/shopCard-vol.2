import styled from "styled-components";

const MainHeaderBtn = styled.button`
display:none;
border: none;
text-decoration: none;
background: white;
font-size:10px;
font-weight:800;
:hover {
    cursor: pointer;
  };
    ${({ theme }) => theme.media.desktop}{
      display:flex;
    };
`;
export default MainHeaderBtn;
