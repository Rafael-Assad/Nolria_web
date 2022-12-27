import { useState } from 'react';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'

interface Props {
  imgSrc: string;
}

const Ilustration = ({imgSrc}: Props) => {
  const [showIlustrationCard, setShowIlustrationCard] = useState<boolean>(false)

  const toogleIlustrationCard = () => {
    setShowIlustrationCard(!showIlustrationCard)
  }

  return (
    <IlustrationContainer>
      <img src={imgSrc} alt="" onClickCapture={toogleIlustrationCard} />

      <IlustrationCard closeFunction={toogleIlustrationCard} show={showIlustrationCard} />
    </IlustrationContainer>
  )
}

export default Ilustration