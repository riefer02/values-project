<template>
	<div class="text-center">
		<v-chip class="mt-4 elevation-1" outlined>
			<div class="d-flex">
				<div class="align-center">
					Number of Participants: {{ participantCount }}
				</div>
			</div>
		</v-chip>
	</div>
</template>

<script>
export default {
	name: "TotalParticipantsChip",
	data() {
		return {
			participantCount: 420,
			error: null,
			loading: false,
		};
	},
	mounted() {
		this.fetchData();
	},
	watch: {
		$route: "fetchData",
	},
	methods: {
		fetchData() {
			this.error = this.participantCount = null;
			this.loading = true;
			this.participantCount;
			const self = this;
			this.axios
				.get("/api/v1/data/total-participants")
				.then((res) => {
					this.loading = false;
					self.participantCount = res.data.numOfParticipates;
					console.log("Participant Count Updated");
				})
				.catch((error) => {
					this.error = error.toString();
				});
		},
	},
};
</script>

<style></style>
