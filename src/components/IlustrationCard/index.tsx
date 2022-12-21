import { MouseEvent } from "react"
import { IlustrationCardContainer } from "./styles"

interface Props {
  closeFunction: (e: MouseEvent<HTMLDivElement>) => void
}

const IlustrationCard = ({ closeFunction }: Props) => {

  return (
    <IlustrationCardContainer onClickCapture={closeFunction}>
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
  )
}

export default IlustrationCard