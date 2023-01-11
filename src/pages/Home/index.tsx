import { useEffect, useState } from "react"
import Ilustration, { ImageDetails } from "../../components/Ilustration"
import backEnd from "../../services/api"
import { Illustration } from "../../types"

const Home = () => {
  const [illustrations, setillustrations] = useState<Illustration[]>([])

  useEffect(() => {
    backEnd.get('illustrations')
      .then(response => {
        console.log(response.data[0].illustration)
        setillustrations(response.data)
      })
  }, [])
  

  const imageMocInfo:ImageDetails = {
    title: 'Um título provisório',
    description: 'Officia irure nisi excepteur duis. Cupidatat irure cupidatat ex pariatur. Deserunt nulla ipsum duis non adipisicing ad proident eu magna ad aliquip reprehenderit sit consectetur.',
    creationDate: 'string'
  }
  return (
    <div>
      {illustrations.map(illustration => {
        return (
          <Ilustration key={illustration.id} 
            imgSrc={illustration.illustration}
            details={imageMocInfo}
          />
        )
      })}
      
    </div>
  )
}

export default Home