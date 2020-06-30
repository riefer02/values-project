<template>
	<v-col class="d-flex" cols="12" md="4">
		<v-subheader>Date of Birth</v-subheader>
		<v-date-picker v-model="picker"></v-date-picker>
	</v-col>
</template>

<script>
export default {
	name: "DateOfBirthInput",
	data() {
		return {
			picker: new Date().toISOString().substr(0, 10),
		};
	},
};
</script>

<style lang="scss">
.v-date-picker-title {
	background-color: #42b983;
}

.v-picker__title.primary {
	padding: 0;
}

.v-subheader.theme--light {
	padding: 0;
	font-size: 1rem;
}
</style>
