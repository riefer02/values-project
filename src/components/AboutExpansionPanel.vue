<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-header class="subtitle-1">{{
        item.name
      }}</v-expansion-panel-header>
      <v-expansion-panel-content class="text-body-2">
        {{ item.content }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Project Overview",
          content:
            "The Values project is a data project designed to collect people's values. The Values project does not ask about race or ethnicity, only age, the user's country of origin and their parent's country of origin.",
        },
        {
          name: "Author/Developer",
          content:
            "Andrew Riefenstahl has been teaching students in classrooms for over six years. His educational background in anthropology, geology and recently computer science has given him a broad base from which to approach many topics. He is also a musician, writer and avid dog dad. He enjoys researching cultural aspects of human society to find insights for a better tomorrow.",
        },
      ],
    };
  },
};
</script>

<style></style>
