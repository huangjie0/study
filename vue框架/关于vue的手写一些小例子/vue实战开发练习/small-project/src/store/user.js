import { localStorageGet } from '@/common/tool';
export default {
  state: {
    user: localStorageGet('user') || {},
  },
  mutations: {       
    saveUser(state,user) {
      state.user = user;
      console.log('state: ', state);
    },
  },
  actions: {},
};