class Adapter {
  
  static isLoggedIn = () => !!Adapter.getToken

  static getToken = () => localStorage.getItem('token')
  
  static logout = () => localStorage.removeItem('token')

  static login = (token) => localStorage.setItem('token', token)
}

export default Adapter;