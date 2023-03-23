import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }

  textarea{
    width: 32rem;
    min-height: 8rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px #0004;
    
    font-size: 1.2rem;
    line-height: 2.4rem;
    border: 2px solid #EFEFEF;
    outline: none;    
    resize: vertical;

    &.error{
      border-color: #FF1D1D;
    }
  }

  .errorMessage{
    height: 1.7rem;
    font-size: 1.2rem;
    color: #FF1D1D;
  }
`;