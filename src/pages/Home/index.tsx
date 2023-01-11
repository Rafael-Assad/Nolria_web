import { useEffect, useState } from "react"
import Illustration from "../../components/Ilustration"
import backEnd from "../../services/api"
import { IllustrationInfo } from "../../types"

const Home = () => {
  const [illustrations, setillustrations] = useState<IllustrationInfo[]>([])

  useEffect(() => {
    backEnd.get('illustrations')
      .then(response => {
        console.log(response.data[0].illustration)
        setillustrations(response.data)
      })
  }, [])
  
  return (
    <div>
      {illustrations.map(illustration => {
        return (<div>
            Vou aplicar a galeria aqui depois de fazer uns ajustes na rota de pegar as ilustrações
          </div>
          // <Illustration key={illustration.id} 
          //   imgSrc={illustration.illustration}
          //   details={imageMocInfo}
          // />
        )
      })}
      
    </div>
  )
}

export default Home