import { atom } from 'recoil';

const userAuthState = atom<string>({
  key: 'auth.user.state',
  default: '',
});

export const authAtoms = { userAuthState };
