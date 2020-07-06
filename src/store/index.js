import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		errorMessages: {},
		showModal: false,
	},
	mutations: {
		toggleModal(state) {
			state.showModal = !state.showModal;
		},
		writeErrors(state, errors) {
			state.errorMessages = errors;
		},
	},
	getters: {
		showModal: (state) => {
			return state.showModal;
		},
	},
	actions: {},
	modules: {},
});
