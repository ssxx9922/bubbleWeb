import {
  infoListData,
  infoTouch,
  coinListData
} from '@/api'
const info = {
  state: {
    indexInfoData: null
  },
  mutations: {
    SET_INDEXCMS_DATA (state, indexInfoData) {
      state.indexInfoData = indexInfoData
    }
  },
  actions: {
    infoListData ({
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        infoListData(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    infoTouch ({
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        infoTouch(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    coinListData ({
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        coinListData(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    }
  }
}

export default info
