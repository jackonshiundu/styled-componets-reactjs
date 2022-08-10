import styled from "styled-components";
import { Heading } from "../../Globalstyles";
import { motion } from 'framer-motion';


export const ContentWrapper=styled.div`
    width: 100%;
`;
export const ContentRow=styled.div`
    display:flex;
    justify-content:space-between;
    	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};


    @media Screen and (max-width:1024px){
        flex-direction:column;
        gap:2rem;
        align-items:center;
        

    }
`;
export const ContentColumn=styled.div`
     display: flex;
     flex-direction:column;
     
     @media screen and (max-width:1024px){

         flex-direction:column;
         align-items:center;
         text-align:center;
     }
`;
export const ContentHeader=styled(Heading)`
     margin-top:7rem;
`;
export const ImgWrapper=styled.div`
    width:80%;
    margin-right:6rem;
    @media screen and (max-width:600px){
        
    }
    
`;
export const Description=styled (motion.div)`
    margin-bottom:2rem;
`;
export const Img=styled(motion.img)`
`;