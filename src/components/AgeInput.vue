<template>
	<v-col cols="12">
		<v-subheader class="pl-0">User's Age</v-subheader>
		<v-slider
			class="pl-0"
			color="teal lighten-1"
			thumb-label="always"
			v-model="slider"
			@end="emitSliderValue"
		></v-slider>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			slider: 26,
		};
	},
	methods: {
		emitSliderValue: function() {
			console.log("child value changed: " + this.slider);
			this.$emit("input", this.slider);
		},
	},
};
</script>

<style scoped lang="scss">
.v-subheader.pl-0.theme--light {
	font-size: 1rem;
	padding-left: 0;
}
</style>
