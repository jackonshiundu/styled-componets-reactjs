
import styled, {createGlobalStyle} from 'styled-components'

 const GlobalStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    transition: all 400ms ease;
    outline:none;
    border:none;
}
`;
export const Section=styled.section`
    width:100%;
    padding:3rem;
    text-align:centre;
    background:${({bg})=>bg?bg:''};
    height:fit-content;
    @media screen and (max-width:1024px){
        padding:2rem;

    }
    @media screen and (max-width:600px){
        margin:1rem;
    }

`;
export const Container=styled.div`
    width:75%;
    margin:0 auto;
    padding:3rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:2rem;

    @media screen and (max-width:600px){
        grid-template-columns: 1fr;
    }
`;
export const Button = styled.button`
 border-radius: 4px;
 background: none;
 white-space: nowrap;
 padding: 10px 20px;
 font-size: 16px;
 color: #F1B814;
 outline: none;
 width: 10rem;
 border: 2px solid #490B3D;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 transition: all 0.6s ease;


 &:before {
     background: #fff;
     content: '';
     position:absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     z-index: -1;
     transition: all 0.6s ease;
     width: 100%;
     height: 0%;
     transform: translate(-50%, -50%) rotate(45deg);
 }

 &:hover:before {
     height: 400%;
     background:#490B3D;
 }

 &:hover {
     color: #fff;
 }

`;
export const MainHeading=styled.h1`
    text-align:center;
    font-size:2rem;
    color:#000;

    @media screen and (max-width:1024px){
        font-size:1.6rem;

    }
    @media screen and (max-width:600px){
        font-size:.9rem;

    }

`;
export const Heading=styled.h2`
    font-size:1.8rem;
    color:#F1B814;

    @media screen and (max-width:1024){

        font-size:1.3rem;

    }
    @media screen and (max-width:1024){
        font-size:1rem;

    }

`;
export const SubHeading=styled.h4`
    font-size:1.3rem;
    color:#F1B814;
    text-align:${({align})=>align?align:'centre'};
    margin:2rem 0 3rem;
    @media screen and (max-width:600px) {
        font-size:.8rem;
        margin:1rem 0 1.5rem;
    }
`;


export default GlobalStyle;
