import styled from 'styled-components';

export const MenuContainer = styled.nav`
  width: 100vw;
  max-width: 100%;
  height: 5vh;
  position: absolute;
  top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C6C6C6; 

  ul{
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li{
        flex: 1;
        list-style: none;

      a{
        text-decoration: none;
        color: inherit;
        font-size: 1.5rem;

        p{
          text-align: center;
          font-size: 1.5rem;
        }
      }

      &:not(:last-child){
        border-right: 1px solid black;
      }

      &.active{
        background: radial-gradient(ellipse closest-side at center, #FFF, transparent);
      }
    }
  }
`