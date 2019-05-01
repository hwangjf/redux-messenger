import ApiAdapter from './ApiAdapter'

class UsersAdapter extends ApiAdapter {
  
  // post /users => users#create
  signup = (userInfo) => {
    return this.post('/users', {
      user: userInfo
    })
      .then(res => res.json())
  }

  login = (userInfo) => {
    return this.post('/login', {
      user: userInfo
    })
      .then(res => res.json())
  }

  autoLogin = () => {
    this.addAuthHeaders()
    return this.get('/auto_login')
  }

}

export default UsersAdapter