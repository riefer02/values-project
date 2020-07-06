<template>
	<v-container>
		<v-row>
			<AboutExpansionPanel />
		</v-row>
	</v-container>
</template>

<script>
import AboutExpansionPanel from "@/components/AboutExpansionPanel.vue";

export default {
	components: {
		AboutExpansionPanel: AboutExpansionPanel,
	},
};
</script>

<style lang="css" scoped></style>
