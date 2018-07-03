import axios from 'axios'
// import router from '@/router'
// import {
//   setSessionStorage,
//   getSessionStorage,
//   removeSessionStorage
// } from '@/utils/mixin';
import {
  Indicator,
  Toast
} from 'mint-ui'

class Http {
  constructor () {
    this.Domain = 'http://127.0.0.1:8000/'
  }
  require (options) {
    if (!options.api) throw new Error('api 不能为空')
    if (!options.params) { options.params = {} }
    if (!options.methods) { options.methods = 'GET' }
    if (!options.loadingVisble) { options.loadingVisble = true }
    if (!options.loadingText) { options.loadingText = '加载中。。。' }
    if (options.loadingVisble) {
      Indicator.open({
        text: options.loadingText,
        spinnerType: 'fading-circle'
      })
    }
    // options.params.Token = options.params.Token ? options.params.Token : getSessionStorage('Token');
    return new Promise((resolve, reject) => {
      return axios({
        method: options.methods,
        url: options.api,
        baseURL: this.Domain,
        headers: {
          'Content-Type': 'application/json'
        },
        params: options.params
      }).then(response => {
        Indicator.close()
        if (response.data.code === 'OK') {
          return resolve(response.data.data)
        } else {
          Toast({
            message: response.data.error,
            position: 'bottom'
          })
          return reject(response.data.error)
        }
      }, error => {
        Indicator.close()
        Toast({
          message: error,
          position: 'bottom'
        })
        return reject(error)
      })
    })
  }
}

export default Http
