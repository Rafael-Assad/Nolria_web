import { MouseEvent, useState } from 'react';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'

interface Props {
  imgSrc: string;
}

const Ilustration = ({imgSrc}: Props) => {
  const [showIlustrationCard, setShowIlustrationCard] = useState<boolean>(false)

  const toogleIlustrationCard = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setShowIlustrationCard(!showIlustrationCard)
  }

  return (
    <IlustrationContainer>
      <img src={imgSrc} alt="" onClickCapture={toogleIlustrationCard} />

      {showIlustrationCard && <IlustrationCard closeFunction={toogleIlustrationCard} />}
      
    </IlustrationContainer>
  )
}

export default Ilustration