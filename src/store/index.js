import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showError: false,
		count: 0,
		errorMessage: {},
	},
	mutations: {
		errorDetected(state) {
			state.showError = true;
		},
		errorDiscard(state) {
			state.showError = false;
		},
		increment(state) {
			state.count++;
		},
	},
	actions: {},
	modules: {},
});
