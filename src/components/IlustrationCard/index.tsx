import { ImageDetails } from "../Ilustration";
import { IlustrationCardContainer, DialogPaperContainer } from "./styles"

interface Props {
  imgSrc: string;
  details: ImageDetails
  show: boolean;
  closeFunction: () => void;
}

const IlustrationCard = ({ closeFunction, show, details}: Props) => {

  return (
    <DialogPaperContainer open={show} onClose={closeFunction} fullWidth maxWidth='lg' >
      <IlustrationCardContainer>
        <div className="art">

        Olha eu aqui
        </div>

        <div className="artInfo">
          <section>
            <h2>
              {details.title}
            </h2>

            {details.creationDate && <p>{details.creationDate}</p>}
          </section>

          <section>
            <p>
              {details.description}
            </p>
          </section>
        </div>
      </IlustrationCardContainer>
    </DialogPaperContainer>
    
  )
}

export default IlustrationCard