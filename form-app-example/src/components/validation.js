import { object, string,ref, number, date, InferType } from 'yup';

let validations = object({
 
  email: string().email('Geçerli bir e-mail giriniz.').required('Zorunlu alan'),
  password: string().min(5,'Parola en az 5 karakter olmalıdır.').required('Zorunlu alan'),
  passwordConfirm: string().oneOf([ref('password')],'Parolalar uyuşmamaktadır.').required('Zorunlu alan'),
 
});

export default validations;