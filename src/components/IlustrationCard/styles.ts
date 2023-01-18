import styled from 'styled-components';
import  Dialog  from "@mui/material/Dialog";


export const IlustrationCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .art{
    min-width: 50vw;
    height: 90vh;
    border-radius: 5px 0px 0px 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0005;

    img{
      width: 100%;
      height: 90vh;

      object-fit: contain;
    }
  }

  .artInfo{
    width: 33vw;
    height: 90vh;
    padding: 2.3rem;
    border-radius: 0px 5px 5px 0px;

    background-color: #FFF;

    section{
      .artTitle{
        font-family: 'Actor';
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.1rem;
      }

      .artCreationDate{
        margin: 1.3rem 0; 
      }

      .artDescription{font-family: 'Acme';
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.5rem;
      }
    }
  }
`;

export const DialogPaperContainer = styled(Dialog)`
  [role='dialog'] {
    background-color: #0000;

    div{
      justify-content: center;
    }
  }
`