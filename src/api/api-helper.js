const CLIENT_ID = "5204ce7c6a642fc";
const ROOT_URL = "https://api.imgur.com";
import qs from "qs";

export default {
  login: () => {
    const params = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`;
  },
};
