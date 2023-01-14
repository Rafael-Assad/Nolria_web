import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 72vw;
  height: 65vh;
  
  display: flex;

  .contactInfo{
    padding: 7rem 4rem;
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .bugdetAlert{
      padding-bottom: 4rem;
      font-weight: 700;
      font-size: 1.5rem;
      border-bottom: 1px solid #333;
    }

    .budgetText{
      margin-top: 3rem;
    }

    p{
      font-size: 1.2rem;
    }
  }

  .contactForm{
    width: 45%;
    height: 100%;
    display: flex;
  }
`;