import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'good-storage'
Vue.use(Vuex);
const state = {
	token: storage.get("token", ""),
	params: storage.get("params", ""),
}

const getters = {
	getToken: state => state.token,
	getParams: state => state.params,
}

const actions = {

}

const mutations = {
	addToken(state, val) {
		state.token = val;
		storage.set("token", val)
	},
	addParams(state, val) {
		state.token = val;
		storage.set("params", val)
	},
	removeToken(state) {
		state.token = "";
		storage.set("token", "")
	}
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});