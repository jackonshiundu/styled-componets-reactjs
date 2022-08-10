import styled from "styled-components";


export const FooterWrapper=styled.footer`
    background:gray;
    @media screen and (max-width:600px){
        
    }
`;
export const FooterLinks=styled.div`
    display:flex;
    margin:0 .5rem;

        @media screen and (max-width:600px) {
            flex-direction:column;
        } 
`;
export const LeftSide=styled.div`
   display:flex;
   justify-content:space-evenly;
   flex:3;
   
`;
export const RightSide=styled.div`

  flex:1;
  display:flex;
  margin-top:2rem;
  justify-content:space-between;
  flex-direction:column;
  margin:2rem auto;
`;
export const IconWrapper=styled.div`
`;
export const LinksWrapper=styled.div`

`;
export const IconMAinWrapper=styled.div`
  display:flex;
  gap:1rem;


`;
export const SubscribeWrapper=styled.div`
  display:flex;
`;
export const LinkList=styled.ul`
 
`;
export const LinkListItem=styled.li`
  list-style:none;
`;
export const Icon=styled.i`
cursor: pointer;
transition:400ms;
&:hover{
    color:#F1B814;
}
`;
export const InputBox=styled.input`
padding:.9rem;
font-size:1rem;
`;
export const Btn=styled.button`
    background:#490B3D;
    padding:.9rem;
    font-size:1rem;
    cursor: pointer;
    color:white;


`;
export const FooterCopyRight=styled.p`
text-align:center;
padding:1rem; 
font-weight:600;
`;