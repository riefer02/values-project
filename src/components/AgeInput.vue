<template>
	<v-col cols="12">
		<v-subheader class="pl-0">User's Age</v-subheader>
		<v-slider
			class="pl-0"
			v-model="slider"
			color="teal lighten-1"
			thumb-label="always"
		></v-slider>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			slider: 45,
		};
	},
};
</script>

<style scoped lang="scss">
.v-subheader.pl-0.theme--light {
	font-size: 1rem;
	padding-left: 0;
}
</style>
