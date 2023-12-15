import * as yup from 'yup';

export const bookTourSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập họ và tên').max(128),
  email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),
  phoneNumber: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
  startDate: yup
    .string()
    .required('Vui lòng nhập ngày đi')
    .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Ngày đi phải có định dạng ngày/tháng/năm'),
  numberOfPeople: yup.number().required('Vui lòng nhập số người').typeError('Vui lòng chỉ nhập số người'),
});
