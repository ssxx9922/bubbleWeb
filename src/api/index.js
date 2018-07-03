import Http from './service'
// 信息列表
export const infoListData = (params) => new Http().require({api: '/api/v1/info/list', params: params})
// 互动
export const infoTouch = (params) => new Http().require({api: 'api/v1/info/touch', params})
// 币列表
export const coinListData = (params) => new Http().require({api: '/api/v1/info/coinList', params: params})
