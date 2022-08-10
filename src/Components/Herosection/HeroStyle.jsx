import styled from "styled-components";
import { Button, MainHeading } from "../../Globalstyles";

export const HeroSection = styled.section`
height: 100vh;
display:flex;
flex-direction:column;
align-items:centre;
background-position: center;
background-size: cover;
padding-top: clamp(70px, 25vh, 220px);
box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const Herovideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

 export const Searchinput=styled.input`
    padding:.9rem;
    width:70%;
    margin:0 auto;
    background:#490B3D;
    color:#fff;
    font-size:1.3rem;
    border:none;
    outline:none;
    @media screen and (max-width:600px){
        padding:.5rem;
        width:85%;

    }
 `;

 export const HeroMainHeader=styled(MainHeading)`

     text-align:center;
     color:#fff;
     margin-top:2rem;


 `;
 export const ButtonWrapper=styled.div`
     display:flex;
     gap:5rem;
     left:40%;
     transform:translateX(35%);

@media screen and (max-width:1024px){
    gap:2.5rem;
    transform:translateX(25%);
}
@media screen and (max-width:600px) {
    display:flex;
    flex-direction:column;
    gap:2.5rem;
    transform:translateX(24%);

}
 `;
 export const SignButton=styled(Button)`
    	color: #F1B814;
        

     &:before {
    background: #490B3D;
    height: 500%;
   }

   &:hover:before {
    height: 0%;
    
   }

    &:hover {
    color: #fff;
    border:2px solid #fff;

    }

 `
