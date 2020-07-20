<template>
	<div class="home">
		<v-container>
			<LogoValues />
			<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
			<h1>Welcome to the Values Project</h1>
			<v-row justify="space-around">
				<v-col cols="12" sm="4">
					<v-sheet>
						<p>
							The Values Project is a sociological study seeking
							to find relationships between human values and
							environmental influences. These relationships will
							shed insight on subtle differences between cultures
							to foster an active conversation with the goal of
							reaching understanding and unity.
						</p>
						<router-link to="/faq">
							<v-btn text color="#039e9e">
								Learn More
							</v-btn>
						</router-link>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
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
.container[data-v-fae5bece] {
	padding-top: 0;
}

h1 {
	margin-top: 1rem;
}

a {
	text-decoration: none;
}
</style>
