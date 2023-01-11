import { ImgHTMLAttributes, useState } from 'react';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'

export interface ImageDetails {
  title: string;
  description: string;
  creationDate?: string
}

interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgSrc: string;
  details: ImageDetails;
  rows: number;
  cols: number;
}

const Illustration = ({imgSrc, details, rows, cols, ...rest}: IllustrationProps) => {
  const [showIlustrationCard, setShowIlustrationCard] = useState<boolean>(false)

  const toogleIlustrationCard = () => {
    setShowIlustrationCard(!showIlustrationCard)
  }

  return (
    <IlustrationContainer rows={rows} cols={cols}>
      <img src={imgSrc} 
        alt="" 
        onClickCapture={toogleIlustrationCard} 
        {...rest}
      />

      <IlustrationCard details={details} imgSrc={imgSrc}
        closeFunction={toogleIlustrationCard} 
        show={showIlustrationCard} 
      />
    </IlustrationContainer>
  )
}

export default Illustration