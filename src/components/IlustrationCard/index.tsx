import { IllustrationInfo } from "../../types";

import { formatDate } from './helpers'
import { IlustrationCardContainer, DialogPaperContainer } from "./styles"


interface Props {
  imgSrc: string;
  details: IllustrationInfo
  show: boolean;
  closeFunction: () => void;
}

const IlustrationCard = ({ imgSrc, details, closeFunction, show}: Props) => {

  return (
    <DialogPaperContainer open={show} onClose={closeFunction} fullWidth maxWidth='lg' >
      <IlustrationCardContainer>
        <div className="art">
          <img src={imgSrc} alt="" />
        </div>

        <div className="artInfo">
          <section>
            <h2 className="artTitle">
              {details.title}
            </h2>

            {details.illustrated_at && (
              <p className="artTitle artCreationDate">
                {formatDate(details.illustrated_at)}
              </p>
            )}
          </section>

          <section>
            <p className="artDescription">
              {details.description}
            </p>
          </section>
        </div>
      </IlustrationCardContainer>
    </DialogPaperContainer>
    
  )
}

export default IlustrationCard