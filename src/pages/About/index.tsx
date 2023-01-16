import artistImage from '../../assets/artist.png'
import AboutIllustration from '../../components/AboutIlustration'
import { IllustrationInfo } from '../../types'
import { AboutContainer } from "./styles"


const About = () => {
  const artistDetails: IllustrationInfo = {
    id: 1,
    hash:'#personal',
    illustration: artistImage,
    title:"Hi, I'm Nolria, aka Max, I'm a digital artist based in São Paulo, Brazil.",
    description:`Since I was a kid I loved being immerse into different universes, as much close to reality as fantastic like elder scrolls, with all of their characters, landscapes, cities and stories all of then really captivated me all throughout my childhood and teenage years.

    Now I want to create my own universes and help building up new stories, characters and be involved in the whole process.
    My favorite things to do is playing video games, learning new things related to art, history and fictional settings, listen to R&B and drawing of course (⁠人⁠ ⁠•͈⁠ᴗ⁠•͈⁠)`,
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