import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

import { FormContainer } from "./styles";

type Props = {};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(255)
    .required('Esse campo é obrigatório'),
  email: yup
    .string()
    .required()
    .min(2)
    .max(255)
    .required()
    .label("Email is required"),
  subject: yup.string().required().min(2).max(255).label("Subject is required"),
  message: yup
   .string()
   .min(20)
   .required()
});

const ContactForm = (props: Props) => {
  const {register, formState: { errors }, handleSubmit,} = useForm({
    resolver: yupResolver(schema),
  });

  const fromSubmit = (data: any) => console.log(data);

  const logErrors = () => {
    if(errors) console.log(errors)
  }

  return (
    <FormContainer onSubmit={handleSubmit(fromSubmit)}>
      <Input
        label="Nome"
        inputName="name"
        placeholder="Escreva seu nome"
        registerItem={register}
        errors={errors}
      />

      <Input
        label="Assunto"
        inputName="subject"
        placeholder="Assunto do Projeto"
        registerItem={register}
        errors={errors}
      />

      <Input label="Email" 
        inputName="email" 
        placeholder="Qual seu email?" 
        registerItem={register}
        errors={errors}
        />

      <TextArea
        label="Mensagem"
        inputName="message"
        placeholder="Descreva, em detalhes, sua ideia"
        registerItem={register}
        errors={errors}
      />

      <div className="buttonField">
        <Button type="submit" buttonName="Enviar" onClick={logErrors}/>

        <Button type="reset" buttonName="Limpar" />
      </div>
    </FormContainer>
  );
};

export default ContactForm;
