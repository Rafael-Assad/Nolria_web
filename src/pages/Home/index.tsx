import { useEffect, useState } from "react"
import ImageList from '@mui/material/ImageList';
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
    <ImageList variant="quilted"
      sx={{ width: '80vw'}}
      cols={4}
      rowHeight={121}
    >
      {illustrations.map((illustr: IllustrationInfo) => {
        return (
          <Illustration key={illustr.id} 
            imgSrc={illustr.illustration}
            details={illustr} 
            cols={illustr.cols || 1} 
            rows={illustr.rows || 1}
          />
        )
      })}
    </ImageList>
  )
}

export default Home