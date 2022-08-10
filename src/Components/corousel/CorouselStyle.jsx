import Slider from 'react-slick';

import styled from "styled-components";


export const TopRow=styled.div`
`
export const TopRowWrapper=styled.div`
    width: 70%;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;

`
export const ButtonWrapper=styled.div`
    
`;
export const ReviewSlider=styled(Slider)`
    	width: 100%;

    .slick-track {
        display: flex;
        padding: 30px;
        gap: 3rem;
    }
    .slick-slide {
        display: flex;
        justify-content: center;
        margin-bottom: 1;
        outline: none;
    }

.slick-list {
    overflow: hidden;
}
`;
export const ImageWrapper=styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    padding: 1rem;
    &:hover{
        box-shadow:0 .4rem .8rem rgba(0,0,0,0.5)
    }
`;
export const CorouselImage=styled.img`
    	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;
export const TextWrapper=styled.span`
    display:block;
    margin-top:${({mt})=>(mt?mt:'')};
    margin-bottom:${({marginbottom})=>marginbottom?marginbottom:''};
    font-weight:${({fw})=>fw?fw:''}
`;


