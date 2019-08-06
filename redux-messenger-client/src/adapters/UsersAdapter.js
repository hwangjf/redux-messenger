import ApiAdapter from './_apiAdapter'
import { Adapter } from '.';

const baseUrl = 'http://localhost:4000/api/v1'
// TODO: move baseUrl to env.process.
// const apiAdapter = new ApiAdapter(baseUrl)

class UsersAdapter extends ApiAdapter {
 
  signup = (userInfo) => {
    console.log(this)
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
        return data.user
      })
  }

  autoLogin = () => {
    this.addAuthHeaders()
    return this.get('/auto_login')
      .then(data => {
        return data.user
      })
  }

  logout = () => {
    Adapter.logout()
  }

  getAllOtherUsers = () => {
    this.addAuthHeaders()
    return this.get('/users')
  }

}

// users adapter that connects to user related backend routes
const usersAdapter = (new UsersAdapter(baseUrl))
console.log(usersAdapter)

export default usersAdapter
