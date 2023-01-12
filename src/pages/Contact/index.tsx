import ContactForm from "../../components/ContactForm"
import { ContactContainer } from "./styles"


const Contact = () => {
  return (
    <ContactContainer>
      <div className="contactInfo">
        <p className="bugdetAlert">
          Orçamentos pelo formulário ou pelo email
          <br />
          nolria.art@gmail.com
        </p>

        <p>
          Consectetur dolor pariatur incididunt nostrud amet ipsum. Ea minim aliquip ea veniam eiusmod ipsum irure adipisicing dolore qui. Nulla sint cillum laborum laboris.
        </p>
      </div>

      <div className="contactForm">
        <ContactForm/>
      </div>
    </ContactContainer>
  )
}

export default Contact