import Ilustration, { ImageDetails } from "../../components/Ilustration"

const Home = () => {
  const imageMocInfo:ImageDetails = {
    title: 'Um título provisório',
    description: 'Officia irure nisi excepteur duis. Cupidatat irure cupidatat ex pariatur. Deserunt nulla ipsum duis non adipisicing ad proident eu magna ad aliquip reprehenderit sit consectetur.',
    creationDate: 'string'
  }
  return (
    <div>
      <Ilustration imgSrc="https://picsum.photos/200"
        details={imageMocInfo}
      />
    </div>
  )
}

export default Home