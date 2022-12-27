import { IlustrationCardContainer, DialogPaperContainer } from "./styles"

interface Props {
  closeFunction: () => void;
  show: boolean;
}

const IlustrationCard = ({ closeFunction, show }: Props) => {

  return (
    <DialogPaperContainer open={show} onClose={closeFunction} fullWidth maxWidth='lg' >
      <IlustrationCardContainer>
        <div className="art">

        Olha eu aqui
        </div>

        <div className="artInfo">
          <section>
            <h2>
              Título da obra
            </h2>

            <p>Data de criação</p>
          </section>

          <section>
            <p>Aqui eu vou ter um belo texto de exemplo pra poder descrever a ilustração</p>
          </section>
        </div>
      </IlustrationCardContainer>
    </DialogPaperContainer>
    
  )
}

export default IlustrationCard