import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.7rem;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }

  input{
    width: 20rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px #0004;
    
    font-size: 1.2rem;
    line-height: 2.4rem;
    border: 2px solid #EFEFEF;
    outline: none;
  }
`;