import axios from "axios";

export const API = {
  getProducts: async () => {
    const url = "https://dummyjson.com/products";
    return await axios.get(url).then((res) => {
      return res;
    });
  },
};
