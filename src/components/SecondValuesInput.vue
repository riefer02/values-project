<template>
	<v-col class="d-flex" cols="12" sm="4">
		<v-select
			:items="items"
			label="2nd Value"
			v-model="selected"
			@change="emitSelectedValue"
		></v-select
	></v-col>
</template>

<script>
export default {
	data: () => ({
		selected: "",
		items: [
			"Wealth",
			"Love",
			"Power",
			"Prestige",
			"Education",
			"Community",
			"Tradition",
			"Faith",
			"Family",
			"Intelligence",
			"Health",
			"Art",
			"Beauty",
			"Security",
			"Loyalty",
			"Friendship",
			"Respect",
			"Obedience",
			"Nature",
			"Privacy",
			"Hedonism",
		],
	}),
	methods: {
		emitSelectedValue: function() {
			console.log("child value changed: " + this.selected);
			this.$emit("input", this.selected);
		},
	},
};
</script>
