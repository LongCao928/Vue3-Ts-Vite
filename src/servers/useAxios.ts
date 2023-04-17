
import R from '@/utils/request'
import Module from '@/config/module'

export default {
  getUserInfo(number: TAny) {
    return R.get(Module.User, '/comments', { postId: number })
  },
  setUserInfo(data: {}) {
    return R.post(Module.User, '/posts', {
      ...data
    })
  }
}