import React from "react";
import styled from "styled-components";

const data = [
    { title: 'DOM', },
    { title: 'DZIECKO', },
    { title: 'ELEKTRONIKA', },
    { title: 'KUCHNIA', },
    { title: 'PREZENT', },
    { title: 'NARZĘDZIA i BHP', },
    { title: 'WYPRZEDAŻ', },
];
const NavWraper = styled.nav`
    display:none;
    ${({ theme }) => theme.media.desktop}{
        display:block;
    }
`;

const UlWraper = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
justify-content: space-between;
padding: 0;
`;

const StyledLi = styled.li`
font-size:12px;
font-weight:800;
:hover {
    border-bottom:${({ theme }) => theme.colors.darkYellow} 1px solid
}
    `;

const PrimaryNav = () => (
    <NavWraper>
        <UlWraper>
            {data.map((item, i) => (
                <>
                    <StyledLi order={i}>{item.title}</StyledLi>
                </>
            ))}
        </UlWraper>
    </NavWraper>
)





export default PrimaryNav;