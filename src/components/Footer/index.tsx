import { FooterContainer } from "./styles"

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <div>©2023 Nolria</div>

      <div>nolria.art@gmail.com</div>

      <div>
        Criado por: 
        <a href="https://github.com/Rafael-Assad"
          target='_blank' rel='noopener noreferrer'
        >
          Rafael Assad
        </a> 
      </div>
    </FooterContainer>
  )
}

export default Footer