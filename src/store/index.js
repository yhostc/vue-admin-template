import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'


import auth from './modules/auth'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'


const state = {

}

export default new Vuex.Store({
	getters,
	actions,
	modules: {
		auth
	},
	strict: debug,
	// plugins: debug ? [createLogger()] : []
})