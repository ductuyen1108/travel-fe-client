export interface IFormLogin {
  phoneNumber: string;
  password: string;
}

export interface IDataLogin {
  phoneNumber: string;
  password: string;
}

export interface IResLogin {
  accessToken: string;
  refreshToken: string;
}

export type ILoginCallback = {
  onSuccess: Function;
  onError: Function;
};
