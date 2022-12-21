import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  max-width: 100%;
  height: 10vh;
  background-color: #EFEFEF;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoContainer = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export const MenuContainer = styled.nav`
  width: 40vw;

  ul{
    display: flex;
    align-items: center;
    justify-content: center;

    li{
      list-style: none;
      font-size: 1.4rem;
      font-weight: 700;

      &:not(:last-child){
        margin-right: 0.5rem;
        padding-right: 0.5rem;
        border-right: 0.2rem solid black;
        border-radius: 0.1rem;
      }
    }
  }
`;

export const SocialIconsContainer = styled.div`
  svg{
    font-size: 2rem;

    &:not(:last-child){
      margin-right: 0.8rem;
    }
  }
`;