class Adapter {
  static isLoggedIn = () => {
    return !!Adapter.getToken
  }

  static getToken = () => {
    return localStorage.getItem('token')
  }
  
}

export default Adapter;