import { ImgHTMLAttributes, useState } from 'react';
import { IllustrationInfo } from '../../types';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'


interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgSrc: string;
  details: IllustrationInfo;
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