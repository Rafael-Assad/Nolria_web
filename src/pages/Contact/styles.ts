import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 72vw;
  height: 65vh;
  
  display: flex;

  .contactInfo{
    padding: 0 4rem;
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .bugdetAlert{
      margin-bottom: 4rem;
      font-weight: 700;
    }
  }

  .contactForm{
    width: 45%;
    height: 100%;
    display: flex;
  }
`;