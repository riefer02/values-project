<template>
  <div>
    <v-navigation-drawer
      app
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
    >
      <v-list dense>
        <v-list-item
          link
          v-for="item in items"
          :key="item.text"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item>{{ item.text }}</v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    source: String,
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
