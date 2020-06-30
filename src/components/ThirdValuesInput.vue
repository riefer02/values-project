<template>
	<v-col class="d-flex" cols="12" sm="4">
		<v-select :items="items" label="3rd Value"></v-select
	></v-col>
</template>

<script>
export default {
	data: () => ({
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
			"Appearance",
			"Loyalty",
			"Friendship",
			"Respect",
			"Obedience",
		],
	}),
};
</script>
