import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9tgO7FG2NTN9paakmI0_EiBG_CwPxCDkc1-4a1YTNx8",
  },
});
