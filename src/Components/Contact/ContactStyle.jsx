import styled from "styled-components";


export const ContactWrapper=styled.div`
    display:flex;
    @media screen and (max-width:1024px) {
        flex-direction:column;
        gap:3rem;
    }

`;
export const ContactCollumn=styled.div`
    flex:1;
`;
export const ImgWrapper=styled.div`
    
`;
export const Img=styled.img`
    
`;
export const Form=styled.form`
    display:flex;
    flex-direction:column;
    gap: 2rem;
    width: 70%;
    margin:auto;
`;
export const Name=styled.input`
    outline:none;
    border:none;
    font-size:1.2rem;
    color:#fff;
    padding:.9rem;
    background:#490B3D;
`;
export const Email=styled.input`
    outline:none;
    border:none;
    font-size:1.2rem;
    color:#fff;
    padding:.9rem;
    background:#490B3D;

`;
export const Message=styled.textarea`
     outline:none;
    border:none;
    font-size:1.2rem;
    color:#fff;
    padding:.9rem;
    height: 11rem;
    background:#490B3D;

`;