import styled from "styled-components";
export const FeatureWrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const FeatureCardWrapper=styled.div`
    top:90%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:2rem;
    left:50%;
    transform:translateX(5%);

    border-radius:2px solid black; 

    @media screen and (max-width:1024px){
        grid-template-columns:1fr 1fr;


    }
    @media screen and (max-width:600px){
        grid-template-columns:1fr;
        transform:translateX(18%);
    }

`;
export const FeatureCard=styled.div`
   display:flex;
   flex-direction:column; 
   justify-content:center;
   align-items:center;
   height:fit-content;
   width: 70%;
   padding:1rem 1rem;
   margin-bottom:1rem;
   cursor: pointer;
   box-shadow:0 .3rem .4rem rgba(0,0,0,0.4);
   backdrop-filter:blur(1.2);
   &:hover{
     transform:scale(1.2);
   }
`;
export const FeatureImageWrapper=styled.i`
    font-size:3rem;
    color:#F1B814;
    background:rgba(0,0,0,0.2);
    padding:1rem;
    border-radius:30%;
    margin-bottom:1rem;
`;
export const FeatureName=styled.h3`
    margin-bottom:1.5rem;
`;
export const FeatureText=styled.p`
    text-align:center;
    color: black;
    margin-bottom:2rem;
    @media screen and (max-width:600px){
        margin-bottom:3rem;
    }
`;