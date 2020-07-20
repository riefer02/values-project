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
          name: "What is the purpose of this project?",
          content:
            "The Values Project is a data project designed to collect people's values. The Values Project does not ask about race or ethnicity, only age, the user's country of origin, and their parent's country of origin. The project theorizes that differences in values separate cultures from assimilating.",
        },
        {
          name: "What are the project's goals?",
          content:
            "The Values Project is a sociological study seeking to find relationships between human values and environmental influences. These relationships will shed insight on subtle differences between cultures to foster an active conversation with the goal of reaching understanding and unity.",
        },
        {
          name: "Why should I participate?",
          content:
            "You will be able to share your personal values which will create meaningful data. With more participants, the accuracy and validity of the study will yield greater insights about cultural values, communities, and human behavior.",
        },
        {
          name: "What is the use of the data?",
          content:
            "The data will be used to reveal blindspots or target areas of further study into the values of communities across the world. As data grows, new questions and stages of the Values Project will begin to flourish and develop.",
        },
        {
          name: "Who will have access to the data?",
          content:
            "Currently the Values Project is run by an independent anthropologist/developer. Details about him can be found below.",
        },
        {
          name: "Is my data and privacy protected?",
          content:
            "The Values Project requests user's email to ensure their are no duplicate entries and maintain authenticity of data. Names are collected to see if possible trends emerge between family names and values. User's full names will never be revealed in reports, data models, or publication.",
        },
        {
          name: "Will I have access to the data?",
          content:
            "As the Values Project grows data models will be added to the Values Project website. Visitors will be able to explore the data using a variety of filters and/or retrieve information for their own research.",
        },
        {
          name: "How long will it take to complete?",
          content:
            "The Values Project has no end date in mind and will hopefully flourish into a larger program that aims to promote unity and understanding for humans across the planet.",
        },
        {
          name: "Who is the author/developer?",
          content:
            "Andrew Riefenstahl has been teaching students in classrooms for over six years. His educational background in anthropology, geology and recently computer science has given him a broad base from which to approach many topics. He is also a musician, writer and avid dog dad. He enjoys researching cultural aspects of human society to find insights for a better tomorrow.",
        },
        {
          name: "How can I give feedback or input?",
          content:
            "If you would like to give feedback or offer a suggestion for the Values Project please direct message via twitter @Values_Project",
        },
      ],
    };
  },
};
</script>

<style></style>
