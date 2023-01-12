class Token {
  public setToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getToken(key: string) {
    return localStorage.getItem(key);
  }

  public removeToken(key: string) {
    localStorage.removeItem(key);
  }
}

export default new Token();
