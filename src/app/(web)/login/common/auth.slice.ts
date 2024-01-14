import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';
import { IProfile } from '../../profile/common/interface';
type AuthLoginProps = {
  isExpiredToken: boolean;
  accessToken: string;
  refreshToken: string;
  profile?: IProfile;
};
const AuthLoginState: AuthLoginProps = {
  isExpiredToken: false,
  accessToken: '',
  refreshToken: '',
  profile: undefined,
};
export const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState: AuthLoginState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setProfile: (state, action: PayloadAction<IProfile | undefined>) => {
      state.profile = action.payload;
    },
    setIsExpiredToken: (state, action: PayloadAction<boolean>) => {
      state.isExpiredToken = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken, setProfile, setIsExpiredToken } = authLoginSlice.actions;
export const accessTokenSelector = (state: RootState) => state.authLogin.accessToken;
export const refreshTokenSelector = (state: RootState) => state.authLogin.refreshToken;

export default authLoginSlice.reducer;
