import ApiAdapter from './apiAdapter'
import { Adapter } from '.';

const baseUrl = 'http://localhost:4000/api/v1'
// TODO: move baseUrl to env.process.
const apiAdapter = new ApiAdapter(baseUrl)

class UsersAdapter extends ApiAdapter {
 
  // post /users => users#create
  signup = (userInfo) => {
    console.log(this)
    return apiAdapter.post('/users', {
      user: userInfo
    })
      .then(data => {
        Adapter.login(data.token)
        return data
      })
  }

  login = (userInfo) => {
    return apiAdapter.post('/login', {
      user: userInfo
    })
      .then(data => {
        Adapter.login(data.token)
        return data
      })
  }

  autoLogin = () => {
    apiAdapter.addAuthHeaders()
    return this.get('/auto_login')
      .then(data => {
        Adapter.login(data.token)
        return data
      })
  }

}

// const a = new UsersAdapter
// debugger
const usersAdapter = new UsersAdapter

export default usersAdapter
