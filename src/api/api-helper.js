const CLIENT_ID = "5204ce7c6a642fc";
const ROOT_URL = "https://api.imgur.com";
import qs from "qs";
import axios from "axios";

export default {
  login: () => {
    const params = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`;
  },
  fetchImages: (token) => {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
