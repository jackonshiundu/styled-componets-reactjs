import styled from "styled-components";
import { Button } from "../../Globalstyles";


export const PricingWraper=styled.div`
    height:fit-content;
    margin-bottom:5rem;
`;
export const PriceHeading=styled.div`
    display:inline-block;
    width: 100%;
    background:#F1B814;
    text-align:center;
    font-size:1.5rem;
    font-weight:600;
`;

export const PricingPlansHeader=styled.div`
    Display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:2rem;
    margin-top:2rem;
    
    @media screen and (max-width:1024px){
        grid-template-columns:1fr 1fr;

    }

    @media screen and (max-width:600px){
        grid-template-columns:1fr;

    }
    
`;
export const PricingPlanCard=styled.div`
    border:.2rem solid #490B3D;
    display:flex;
    flex-direction:column;
    margin-top:3rem;
    align-items:center;
    position:relative;
    
    cursor:pointer;
    &:hover:before{
        position:absolute;
        transition:600ms ease;
        content:'';
        background:#490B3D;
        width:0.5rem;
        height:5rem;
        top:-5rem

    }
    &:hover{
        border:none;
        box-shadow:0 .3rem .9rem rgba(0,0,0,0.4);
    }
    @media screen and (max-width:1024px){
        &:hover:before{
            width:0;
            
        }
    }

`;
export const PlanPrice=styled.div`
    display:flex;

`;


export const PlanTitle = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
`;

export const PlanAMount = styled.h4`
	font-size: 1.2rem;
`;
export const PlanPeriod = styled.span`
	font-size: 1.2rem;
`;

export const PlanNumberOfAccounts = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const Featurecard = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PlanFeatures = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;
export const PlanButton=styled(Button)`
     position:relative;
     bottom:1rem;
`;
