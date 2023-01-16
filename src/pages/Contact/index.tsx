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

        <p className="budgetText">
        For work enquiries or just to say hello, please use the form
        <br/>
        Thank you in advance :)
        </p>
      </div>

      <div className="contactForm">
        <ContactForm/>
      </div>
    </ContactContainer>
  )
}

export default Contact