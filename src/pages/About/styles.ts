import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 70vw;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .details{
    width: 55%;
    height: 100%;


    h2{
      height: 5rem;
      font-size: 2.5rem;
      border-bottom: 2px solid #D9D9D9;
    }

    p{
      font-size: 1.5rem;
    }

  }

  figure{
    img{
      width: 30vw;
      height: auto;
    }
  }
`;