import { createStore } from "vuex";
import auth from "./modules/auth";
import image from "./modules/image";

const store = createStore({
  modules: {
    auth,
    image,
  },
});

export default store;
