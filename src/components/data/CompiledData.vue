<template>
	<v-container>
		<v-row
			><v-col><CountDataModel /></v-col
		></v-row>
	</v-container>
</template>

<script>
import CountDataModel from "@/components/data/CountDataModel.vue";

export default {
	name: "CompiledData",
	components: {
		CountDataModel: CountDataModel,
	},
};
</script>

<style lang="css"></style>
