import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

import { schema, sendEmailBackend } from './scripts'
import { FormContainer } from "./styles";
import SnackBarAlert from "../SnackBarAlert";
import { SeverityOpts } from "../../types";


const ContactForm = () => {
  const {register, handleSubmit, reset, formState, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false)
  const [snackSeverity, setSnackSeverity] = useState<SeverityOpts>('success')
  const [snackMessage, setSnackMessage] = useState<string>('')

  const fromSubmit = async (formData: any) =>{ 
    console.log(formData)
    await sendEmailBackend(formData, setOpenSnackBar, setSnackSeverity, setSnackMessage)
  };

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset()
    }
  }, [reset, formState])
  

  return (
    <>
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
          <Button type="submit" buttonName="Enviar" />

          <Button type="reset" buttonName="Limpar" onClick={reset} />
        </div>
      </FormContainer>

      <SnackBarAlert message={snackMessage}
        severity={snackSeverity}
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
    </>
  );
};

export default ContactForm;
