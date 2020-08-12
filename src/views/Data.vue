<template>
	<div class="data">
		<TotalParticipantsChip />
		<CompiledData />
	</div>
</template>

<script>
import TotalParticipantsChip from "@/components/data/TotalParticipantsChip";
import CompiledData from "@/components/data/CompiledData.vue";

export default {
	components: {
		CompiledData: CompiledData,
		TotalParticipantsChip: TotalParticipantsChip,
	},
};
</script>
