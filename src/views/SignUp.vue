<template>
	<div class="sign-up">
		<h1>Sign Up</h1>
		<SignUpForm />
	</div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";

export default {
	name: "SignUp",
	components: {
		SignUpForm: SignUpForm,
	},
};
</script>
