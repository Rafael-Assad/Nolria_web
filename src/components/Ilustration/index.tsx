import { ImgHTMLAttributes, useState } from 'react';
import { IllustrationInfo } from '../../types';
import IlustrationCard from '../IlustrationCard';
import { IlustrationContainer } from './styles'


interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgSrc: string;
  details: IllustrationInfo;
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