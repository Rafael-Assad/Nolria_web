import artistImage from '../../assets/artist.png'
import Ilustration, { ImageDetails } from "../../components/Ilustration"
import { AboutContainer } from "./styles"

type Props = {}

const About = (props: Props) => {
  const artistDetails: ImageDetails = {
    title: 'Um artista fenomenal',
    description: 'Esse é um exemplo de um artista que, além de talentoso, também é uma pessoa muito dedicada. Uma maravilha de pessoa e um charme também. Seu talento é tão grande que ainda não conheceu limites. Em constante evoução, consegue fazer a mais simples das atividades com maestria'
  }
  return (
    <AboutContainer>
      <Ilustration imgSrc={artistImage}
        details={artistDetails}
      />

      <div className="details">
        <h2>
          {artistDetails.title}
        </h2>

        <p>
          {artistDetails.description}
        </p>
      </div>
    </AboutContainer>
  )
}

export default About