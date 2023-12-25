import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Số điện thoại không được để trống')
    .min(10, 'Số điện thoại phải có độ dài 10 ký tự')
    .max(10, 'Số điện thoại phải có độ dài 10 ký tự')
    .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/, 'Số điện thoại không đúng định dạng'),
  password: yup.string().required('Mật khẩu không được để trống').min(3, 'Mật khẩu phải ít nhất 3 kí tự'),
});
