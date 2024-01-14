import slugify from 'slugify';
import { format, differenceInDays, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

interface Props {
  data: string;
}

export const convertSlug = ({ data }: Props) => {
  return slugify(data, {
    replacement: '-',
    locale: 'vi',
    lower: false,
  });
};

export const convertDate = ({ data }: Props) => {
  if (data) {
    const parsedDate = new Date(data);
    return format(parsedDate, 'dd MMMM, yyyy', { locale: vi });
  } else {
    return 'chưa cập nhật';
  }
};

export const convertGender = (gender: string) => {
  switch (gender.toUpperCase()) {
    case 'MALE':
      return 'Nam';
    case 'FEMALE':
      return 'Nữ';
    default:
      return 'không xác định';
  }
};

export const convertStatusTour = (status: string) => {
  switch (status.toUpperCase()) {
    case 'UNPAID':
      return 'Chưa thanh toán';
    case 'PAID':
      return 'Đã thanh toán';
    default:
      return 'Trạng thái không xác định';
  }
};

export const convertCountDate = (startTime: string | null, endTime: string | null): number | null => {
  if (startTime && endTime) {
    const startDate = parseISO(startTime);
    const endDate = parseISO(endTime);

    const diffInDays = differenceInDays(endDate, startDate);

    return diffInDays;
  }

  return null;
};
