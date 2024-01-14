import * as yup from 'yup';

export const schemaSendMessage = yup.object().shape({
  name: yup.string().required('Vui lòng nhập họ và tên'),
  phoneNumber: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
  email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),
  company: yup.string().required('Vui lòng nhập tên công ty'),
  message: yup.string().required('Vui lòng nhập lời nhắn'),
});
