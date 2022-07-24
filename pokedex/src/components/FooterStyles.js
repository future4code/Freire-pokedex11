import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: flex;
  width: 92,5%;
  margin-top: 0px; 
   
  @media (max-width: 1000px) {
    padding: 100px 10px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#262626;
    margin-top: 15px;
    border-radius: 10px;
    border:  solid 1px #0e6f9f;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: auto;
 
  padding: 0 5px;

  @media (max-width: 1000px) {
    padding: 10px 10px;
    margin-left: 0;
    
  }

`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 15px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #FAC705;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  &:hover {
      color: #FAC705;
      transition: 200ms ease-in;
  }
`;

