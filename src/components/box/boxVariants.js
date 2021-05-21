import React from "react";
import styled from "styled-components";
import avatar from "../../images/photo_1.png"
import svgSrc from "../../images/Ellipse_25.svg";
import svgSrcGray from "../../images/Ellipse_17.svg";
import BtnCard from "../buttons/btnCard";
import StyledSpan from "../tag/styledSpan";
const data = [
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        avatar: avatar,
        svg: svgSrc,
        price: '29,00 zł / szt.',
        avaiable: 'Dostępny 3szt',
    },
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        avatar: avatar,
        svg: svgSrc,
        price: '49,00 zł / szt.',
        avaiable: 'Dostępny 3szt',
    },
    {
        title: 'Bambusowe Naczynia dla Dzieci Ambition Junior Alex',
        avatar: avatar,
        svg: svgSrc,
        price: '79,00 zł / szt.',
        avaiable: 'Dostępny 3szt',
    },

];

const StyledDiv = styled.div`
${({ theme }) => theme.media.desktop}{
    margin:0 40px;
    display:flex;
    
}`;
const StyledCard = styled.div`
    display:flex;`;
const StyledAvatar = styled.img`
    width:40%`;
const StyledDescription = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>span:nth-child(3){
        font-weight:800;
        font-size:20px;
    };
    &>div{
        display:flex;
        justify-content: flex-start;
        align-items:center;

        &>button{
            display:flex;
            padding:15px;
            margin:10px;
            width:100px;
            
         };
     &>img{
         width:30px;
     }
    };

    `;
const StyledPrice = styled.span`
`;

const ComponentBox = () => (
    <StyledDiv >
        {
            data.map((item, i) => (
                <StyledCard order={i}>
                    <StyledAvatar src={item.avatar} />
                    <StyledDescription>
                        <StyledSpan>{item.title}</StyledSpan>
                        <StyledSpan><img src={item.svg}></img> {item.avaiable}</StyledSpan>
                        <StyledPrice>{item.price}</StyledPrice>
                        <div>
                            <img src={svgSrcGray}></img>
                            <BtnCard>Do koszyka</BtnCard>
                        </div>
                    </StyledDescription>
                </StyledCard>
            ))
        }
    </StyledDiv >
)





export default ComponentBox;