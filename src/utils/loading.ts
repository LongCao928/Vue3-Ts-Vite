
import { ElLoading } from 'element-plus'

let loading: ReturnType<typeof ElLoading.service>,
  timeout: ReturnType<typeof setTimeout>
export default {
  show(options = {}) {
    timeout = setTimeout(() => {
      loading = ElLoading.service({
        fullscreen: true,
        body: true,
        lock: true,
        text: '加载中...',
        // background: 'rgba(122, 122, 122, 0.8)',
        ...options
      })
    }, 0)
    return loading
  },
  hide() {
    if (loading) {
      loading.close()
    }
    clearTimeout(timeout)
    return loading
  }
}