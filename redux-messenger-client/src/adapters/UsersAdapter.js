import ApiAdapter from './ApiAdapter'
import { Adapter } from '.';

// TODO: move baseUrl to env.process.
// const apiAdapter = new ApiAdapter(baseUrl)

class UsersAdapter extends ApiAdapter {
 
  signup = (userInfo) => {
    return this.post('/signup', {
      user: userInfo
    })
      .then(data => {
        return data.user
      })
  }

  login = (userInfo) => {
    return this.post('/login', {
      user: userInfo
    })
      .then(data => {
        return data
      })
  }

  autoLogin = () => {
    this.addAuthHeaders()

    return this.get('/auto_login')
      .then(data => {
        return data
      })
  }

  logout = () => {
    Adapter.removeToken()
  }

  getUsers = () => {
    this.addAuthHeaders()
    return this.get('/users')
  }
}

// users adapter that connects to user related backend routes
const usersAdapter = new UsersAdapter()

export default usersAdapter
