import { SiInstagram, SiArtstation, SiLinktree } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { ImBehance2 } from 'react-icons/im'

import { HeaderContainer, LogoContainer, MenuContainer, SocialIconsContainer } from "./styles"

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        Nolria
      </LogoContainer>

      <MenuContainer>
        <ul>
          <li>Home</li>

          <li>About</li>

          <li>Portifolio</li>

          <li>Contact</li>
        </ul>
      </MenuContainer>

      <SocialIconsContainer>
        <SiInstagram className='instagram'/>

        <ImBehance2 className='behance'/>

        <SiArtstation className='artstation'/>

        <SiLinktree className='linktree'/>

        <HiOutlineMail className='email'/>
      </SocialIconsContainer>
    </HeaderContainer>
  )
}

export default Header