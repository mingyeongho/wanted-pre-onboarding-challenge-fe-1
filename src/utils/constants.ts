const baseUrl: string = import.meta.env.VITE_API_URL;
export const API_URLS = {
  auth: {
    login: baseUrl + `/users/login`,
    signup: baseUrl + `/users/create`,
  },
};

export const TOKEN_KEY = "usersToken";
