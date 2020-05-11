export default {
  state: {
    user: null,
    token: null,
    logged: false,
  },
  mutations: {
    login: (state, userData) => {
      if (typeof userData == "object") {
        state.token = userData["token"];
        delete userData["token"];
        state.logged = true;
        return (state.user = userData);
      }
      return null;
    },
    logout :(state)=>{
      state.logged = false
      state.user = null 
      state.token = null
    }
  },
  getters: {
    isLogged: (state) => {
      return state.logged;
    },
  },
  actions: {
  },
};
