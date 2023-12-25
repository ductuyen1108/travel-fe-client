import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authLoginReducer from '@/app/(web)/login/common/auth.slice';
import loginReducer from '@/app/(web)/login/common/login.slice';
import tourReducer from '@/app/(web)/Home/common/slice';
import paymentReducer from '@/app/(web)/thanh-toan/common/slice';

// slices

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'travelWeb-',
  whitelist: ['authLogin', 'login', 'merchantProfile'],
};

const rootReducer = combineReducers({
  authLogin: authLoginReducer,
  login: loginReducer,
  tour: tourReducer,
  payment: paymentReducer,
});

export { rootPersistConfig, rootReducer };
