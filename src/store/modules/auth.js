import api from "../../api/api-helper";
import qs from "qs";
import router from "../../router";

const state = {
  token: localStorage.getItem("imgur_token"),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    localStorage.removeItem("imgur_token");
  },
  finalizeLogin: ({ commit }, fullToken) => {
    const token = qs.parse(fullToken.replace("#", ""));
    commit("setToken", token.access_token);
    localStorage.setItem("imgur_token", token.access_token);
    router.push("/");
  },
  login: () => {
    api.login();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
