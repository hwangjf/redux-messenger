class Adapter {
  static loggedIn = () => {
    return !!Adapter.getToken
  }

  static getToken = () => {
    return localStorage.getItem('token')
  }
  
}

export default Adapter;