<template>
	<v-container>
		<v-row
			><v-col>
				<v-sheet class="elevation-1">
					<p>
						This data table reflects the total selections for each
						value in the database from submissions.
					</p>
				</v-sheet>
				<CountDataModel /> </v-col
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
