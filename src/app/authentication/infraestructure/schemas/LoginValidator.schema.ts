import * as Yup from 'yup';


export const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Campo Requerido!'),
    password: Yup.string().min(3, 'Debe tener al menos 3 caracteres').required('Campo Requerido!'),
  });
  