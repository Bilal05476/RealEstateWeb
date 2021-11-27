import axios from "axios";
export const baseURL = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "e2613f6d31mshe47f808ab8856acp191748jsn79bf85bb41cb",
    },
  });
  return data;
};
