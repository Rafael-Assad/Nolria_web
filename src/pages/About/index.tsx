import Ilustration, { ImageDetails } from "../../components/Ilustration"

type Props = {}

const About = (props: Props) => {
  const artistDetails: ImageDetails = {
    title: 'Fofinho',
    description: 'Um artista fenomenal'
  }
  return (
    <div>
      <Ilustration imgSrc="https://picsum.photos/200"
        details={artistDetails}
      />
    </div>
  )
}

export default About