import * as yup from "yup";
import backEnd from "../../services/api";
import { BudgetEmail, SeverityOpts } from "../../types";

export const schema = yup.object().shape({
  name: yup.string()
    .required('Nome é obrigatório')
    .min(2, 'O nome precisa ter, pelo menos, 2 letras')
    .max(255, 'Nome muito comprido, por favor, use abreviações')
    .matches(/[a-zA-Z]/g, "Somente letras!"),

  subject: yup.string()
    .required('Assunto é obrigatório')
    .matches(/[\w.,]/g, "Sem caracteres especiais!")
    .min(5, 'Seja específico com o assunto')
    .max(255, 'Assunto muito grande.'),

  email: yup.string()
    .required('Email é obrigatório')
    .email('Email inválido'),

  message: yup.string()
    .required('A mensagem é obrigatória')
    .matches(/[\w.,]/g, "Sem caracteres especiais!")
    .min(20, 'Por favor, de mais detalhes sobre sua ideia')
});



export const sendEmailBackend = async (emailInfo: BudgetEmail, 
    setOpenSnackBarState: (bool: boolean) => void, 
    setSnackSeverityState: (severity: SeverityOpts) => void,
    setSnackMessageState: (message: string) => void
    ) => {
  
  await backEnd.post('contact/', emailInfo)
    .then(() => {
      setOpenSnackBarState(true)
      setSnackSeverityState('success')
      setSnackMessageState('Pedido de Orçamento enviado com sucesso')
    })
    .catch(error =>{
      console.error(error)

      setOpenSnackBarState(true)
      setSnackSeverityState('error')
      setSnackMessageState('Erro ao enviar orçamento. Por favor, mande email diretamente')
    })
}
