class Token {
  public getToken({ key }: { key: string }) {
    localStorage.getItem(key);
  }

  public setToken({ key, value }: { key: string; value: string }) {
    localStorage.setItem(key, value);
  }

  public removeToken({ key }: { key: string }) {
    localStorage.removeItem(key);
  }
}

export default new Token();
