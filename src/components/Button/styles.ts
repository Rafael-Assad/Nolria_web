import styled from 'styled-components';

export const ButtonContainer = styled.button`
  min-width: 8rem;
  padding: 0.5rem ;
  
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-family: 'Acme', sans-serif;
  font-size: 1.3rem;
  line-height: 2rem;

  color: #FFF;

  &[type='submit']{
    background-color: #4AC652;

    &:hover {
      background-color: #64E06C;
    }
  
    &:active {
      background-color: #3C8341;
    }
  }

  &[type='reset']{
    background-color: #FF6B6B;

    &:hover {
      background-color: #FF8181;
    }
  
    &:active {
      background-color: #9A5353;
    }
  }

`;