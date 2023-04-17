
import R from '@/utils/request'
import Module from '@/config/module'

export default {
  getUserInfo(name: string) {
    return R.get(Module.User, '/getInfo', { id: name })
  },
  setUserInfo(data: {}) {
    return R.post(Module.User, 'setInfo', {
      ...data
    })
  }
}