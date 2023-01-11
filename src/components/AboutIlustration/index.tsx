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
}

const AboutIllustration = ({imgSrc, details, ...rest}: IllustrationProps) => {
  const [showIlustrationCard, setShowIlustrationCard] = useState<boolean>(false)

  const toogleIlustrationCard = () => {
    setShowIlustrationCard(!showIlustrationCard)
  }

  return (
    <IlustrationContainer >
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

export default AboutIllustration