import styled from "styled-components";
 
export const Box = styled.div`
    padding: 5% 2%;
    background: black;
    bottom: 0;
    width: 100%;
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: blue;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 24px;
    color: blue;
    margin-bottom: 40px;
    font-weight: bold;
`;