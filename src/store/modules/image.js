import apiHelper from "../../api/api-helper";

const state = {
  images: [],
};

const getters = {
  getImages: (state) => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  fetchImages: async ({ rootState }) => {
    const response = await apiHelper.fetchImages(rootState.auth.token);
    console.log(response);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
