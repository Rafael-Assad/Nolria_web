import { useState } from 'react';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'

export interface ImageDetails {
  title: string;
  description: string;
  creationDate?: string
}

interface Props {
  imgSrc: string;
  details: ImageDetails;
}

const Ilustration = ({imgSrc, details}: Props) => {
  const [showIlustrationCard, setShowIlustrationCard] = useState<boolean>(false)

  const toogleIlustrationCard = () => {
    setShowIlustrationCard(!showIlustrationCard)
  }

  return (
    <IlustrationContainer>
      <img src={imgSrc} alt="" onClickCapture={toogleIlustrationCard} />

      <IlustrationCard details={details} imgSrc={imgSrc}
        closeFunction={toogleIlustrationCard} 
        show={showIlustrationCard} 
      />
    </IlustrationContainer>
  )
}

export default Ilustration