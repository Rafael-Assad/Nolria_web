import * as yup from "yup";

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

export const fromSubmit = (data: any) => console.log(data);

