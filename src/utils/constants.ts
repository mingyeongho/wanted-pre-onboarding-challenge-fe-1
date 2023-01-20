const baseUrl: string = import.meta.env.VITE_API_URL;

export const API_URLS = {
  auth: {
    login: baseUrl + `/users/login`,
    signup: baseUrl + `/users/create`,
  },
  todo: {
    get_todos: baseUrl + `/todos`,
    get_todo_by_id: (id: string) => baseUrl + `/todos/${id}`,
    create_todo: baseUrl + `/todos`,
    update_todo: (id: string) => baseUrl + `/todos/${id}`,
    delete_todo: (id: string) => baseUrl + `/todos/${id}`,
  },
};

export const TOKEN_KEY = "usersToken";
