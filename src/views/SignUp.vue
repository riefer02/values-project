<template>
	<div class="sign-up">
		<SignUpForm />
		<transition name="fade">
			<ModalWarning
				v-if="showModal"
				:modalData="this.$store.state.errorMessages"
			/>
		</transition>
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

<style lang="css">
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-out;
}
</style>
