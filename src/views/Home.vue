<template>
	<div class="home">
		<LogoValues />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<h1>Welcome to the Values Project</h1>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import LogoValues from "@/components/LogoValues.vue";

export default {
	name: "Home",
	components: {
		// HelloWorld,
		LogoValues: LogoValues,
	},
};
</script>

<style scoped lang="scss">
h1 {
	margin-top: 1rem;
}
</style>
