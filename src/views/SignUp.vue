<template>
	<div class="sign-up">
		<h1>Sign Up</h1>
		<SignUpForm />
		<ModalWarning
			v-if="showModal"
			:modalData="this.$store.state.errorMessages"
		/>
	</div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import ModalWarning from "@/components/Modal.vue";

export default {
	name: "SignUp",
	components: {
		SignUpForm: SignUpForm,
		ModalWarning: ModalWarning,
	},
	computed: {
		showModal() {
			return this.$store.state.showModal;
		},
	},
};
</script>
