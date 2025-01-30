import { defineStore } from 'pinia';
import router from '../router';

export const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: '',
  }),
  actions: {
    doAccountAction(account: { username: string; password: string }) {
      const { username, password } = account;
      this.id = '1';
      this.token = password;
      this.name = username;
      localStorage.setItem('token', password);
      router.push('/home');
    },
  }
});