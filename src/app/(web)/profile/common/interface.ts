export interface IProfile {
  id: number;
  phoneNumber: string;
  email: string;
  name: string;
  birthDate: string;
  createdAt: string;
  gender: string;
  userId: number;
  tierPoint: number;
  address: string;
  fullAddress: string;
  avatar: IAvatar;
}

export interface IAvatar {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
  uploaderId: number;
}

export interface IDataFormEditProfile {
  name: string;
  email: string;
  avatarId: number;
  address: string;
  birthDate: string;
  provinceId: number;
  districtId: number;
  wardId: number;
}

export interface ISubmitEditProfile {
  name: string;
  email: string;
  avatarId: number;
  address: string;
  birthDate: string;
  provinceId: {
    code: number;
  };
  districtId: {
    code: number;
  };
  wardId: {
    code: number;
  };
}

export interface IChangePassword {
  password: string;
  newPassword: string;
}

export interface ISubmitChangePassword {
  password: string;
  newPassword: string;
  confirmNewPassword?: string;
}

// Address
export interface IParam {
  id: string;
}

export interface IProvince {
  name: string;
  slug: string;
  type: string;
  nameWithType: string;
  code: string;
}

export interface IDistrict {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}

export interface IWard {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}

export interface StateProps {
  showOldPassword: boolean;
  showNewPassword: boolean;
}
