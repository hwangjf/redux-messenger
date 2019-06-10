class Adapter {
  static isLoggedIn = () => !!Adapter.getToken()

  static getToken = () => localStorage.getItem('token')
  
  static removeToken = () => localStorage.removeItem('token')

  static logout = () => Adapter.removeToken()

  static setToken = (token) => localStorage.setItem('token', token)
}

export default Adapter;