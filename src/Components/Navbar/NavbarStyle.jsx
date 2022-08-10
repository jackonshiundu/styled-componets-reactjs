import styled from "styled-components";


export const Navbarwrapper=styled.nav`

    width: 100%;
    height: 5rem;
    color:#490B3D;
    display:flex;
    position:fixed;
    margin-top:0;
    z-index:2000;
    align-items:center;
    justify-content:space-between;
    backdrop-filter: blur(1rem);
    box-shadow:0 .4rem .5rem rgba(0,0,0,0.4);
    @media screen and (max-width: 1024px) {
        padding:0 5rem;
    }
    @media screen and (max-width: 600px) {
        padding:0 3rem;
    }

    
`;
export const NavLogo=styled.img`
    display:none;
    height:fit-content;
    width:3rem;
    cursor: pointer;
    aspect-ratio:1/1;

    @media screen and (max-width: 1024px){
        display:block;
    }


`;
export const NavIcon=styled.div`
    display:none;
    cursor: pointer;
    @media screen and (max-width:1024px){
        display:block;
    }
`;
export const Cancel=styled.i`

    
`
export const NavName=styled.h3`
    display:block;
    margin-left:3rem;
    cursor: pointer;
    @media screen and (max-width:1024px){
        display:none;
    }
`;
export const MobileIcon=styled.h3`
    display:none;
    
    @media screen and (max-width:1024px){
        display:block;
    }
`;
export const Menudata=styled.ul`
display:flex;
gap:1.5rem;

margin-right:2rem;
    @media screen and (max-width:1024px){
        position:absolute;
        flex-direction:column;
        right:-1.5rem;
        width: 9rem;
        padding:2rem 0;
        justify-content:center;
        align-items:center;
        z-index:1000;
        background:#210b1c;
        margin-top:27rem;
        display:${({display})=>display?'none':'inline-block'}
    }
    @media screen and (max-width: 600px) {
        right:-1.3rem;
    }

`;
export const NavItems=styled.li`
list-style-type:none;
cursor: pointer;

&:hover{
    color:#210b1c;
    transform:scale(1.3);

}
    @media screen and (max-width:1024px){
        padding:2rem;
    }
`;
export const NavLinks=styled.span`
 font-size:1.2rem;
 font-weight:500;
 color:#490B3D;
    @media screen and (max-width:1024px){
        color:#fff;
        font-size:1rem;
    }
`;

