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
            "The Values Project is a data project designed to collect people's values. The Values Project does not ask about race or ethnicity, only age, the user's country of origin and their parent's country of origin. The project theorizes that differences in values separates cultures from integrating.",
        },
        {
          name: "Project Goal",
          content:
            "The goal of the Values Project is to find relationships between values and environmental influences. These relationships will hopefully shed insight on subtle differences between cultures so that an active conversation can be created in order to foster understanding and unity.",
        },
        {
          name: "Data Security",
          content:
            "The Values Project requests user's email to ensure their are no duplicate entries and maintain authenticity of data. Names are collected to see if possible trends emerge between family names and values. User's full names will never be revealed in reports, data models, or publication.",
        },
        {
          name: "Data Modeling",
          content:
            "As the Values Project grows data models will be added to the Values Project website. Visitors will be able to explore the data using a variety of filters or retrieve information for their own research.",
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
