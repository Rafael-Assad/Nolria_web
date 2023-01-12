import artistImage from '../../assets/artist.png'
import AboutIllustration from '../../components/AboutIlustration'
import { IllustrationInfo } from '../../types'
import { AboutContainer } from "./styles"


const About = () => {
  const artistDetails: IllustrationInfo = {
    id: 1,
    hash:'#personal',
    illustration:artistImage,
    title:'Um artista fenomenal',
    description:'Esse é um exemplo de um artista que, além de talentoso, também é uma pessoa muito dedicada. Uma maravilha de pessoa e um charme também. Seu talento é tão grande que ainda não conheceu limites. Em constante evoução, consegue fazer a mais simples das atividades com maestria',
    created_at:'string',
    updated_at:'string',
    cols: 1,
    rows: 1 
  }

  return (
    <AboutContainer>
      <AboutIllustration imgSrc={artistImage}
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