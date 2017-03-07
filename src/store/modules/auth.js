// import shop from '../../api/shop'
import * as types from '../types'

// state
const state = {
  sid: null,
  user: null
}


// getters
const getters = {
  getCacheSid: () => sessionStorage.getItem('sid'),
  getCacheUserInfo: () => JSON.parse(sessionStorage.getItem('user'))
}


// mutations
const mutations = {
  // 用户登录
  [types.USER_LOGIN](state, action) {
    state.sid = action.sid;
    sessionStorage.setItem('sid', action.sid);
  },
  [types.USER_UPDATEINFO](state, action) {
    state.user = action.user;
    sessionStorage.setItem('user', JSON.stringify(action.user));
  },
  // 注销登录
  [types.USER_LOGOUT](state, action) {
    state.sid = null
    state.user = null

    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('user');
  }
}


export default {
  state,
  getters,
  mutations
}