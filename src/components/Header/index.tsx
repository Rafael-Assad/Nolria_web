import { SiInstagram, SiLinktree, SiLinkedin } from 'react-icons/si'
import { ImBehance2 } from 'react-icons/im'

import { HeaderContainer, LogoContainer, MenuContainer, SocialIconsContainer } from "./styles"
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        Nolria
      </LogoContainer>

      <MenuContainer>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about">
              About
            </Link>
          </li>

          <li>
            <Link to="/portifolio">
              Portifolio
            </Link>
          </li>

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </MenuContainer>

      <SocialIconsContainer>
        <a href="https://www.instagram.com/nolria_art/"
          target='_blank' rel='noopener noreferrer'
        >
          <SiInstagram className='instagram' />
        </a>

        <a href="https://www.behance.net/nolria"
          target='_blank' rel='noopener noreferrer'
        >
          <ImBehance2 className='behance'/>
        </a>

        <a href="https://linktr.ee/nolria.art"
          target='_blank' rel='noopener noreferrer'
        >
          <SiLinktree className='linktree'/>
        </a>

        <a href="https://www.linkedin.com/in/nolria-max-323687238/"
          target='_blank' rel='noopener noreferrer'
        >
          <SiLinkedin className='linkedin'/>
        </a>
      </SocialIconsContainer>
    </HeaderContainer>
  )
}

export default Header