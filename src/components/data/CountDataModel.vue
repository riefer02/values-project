<template>
  <v-data-table
    :headers="headers"
    :items="valueData"
    :items-per-page="20"
    class="elevation-1"
    hide-default-footer
  >
    <template v-slot:item="props">
      <tr class="text-left">
        <td>{{ props.item.name || "data unknown" }}</td>
        <td>{{ props.item.count || 0 }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "CountedDataModel",
  data() {
    return {
      valueData: [],
      headers: [
        {
          text: "Value",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Count",
          value: "count",
        },
      ],

      error: null,
      loading: false,
    };
  },
  // created() {
  //   // Fetch the data when the view is created and the data is already being observed
  //   this.fetchData();
  // },
  mounted() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.error = this.valueData = null;
      this.loading = true;
      this.valueData = [];
      const self = this;
      this.axios
        .get("/api/v1/data/values")
        .then((res) => {
          this.loading = false;
          self.valueData = res.data.totalValues;
          // this.$set(this.valueData, this.valueData.name, res.data.totalValues);
          console.log("Values Data Updated");
        })
        .catch((error) => {
          this.error = error.toString();
        });
    },
  },
};
</script>

<style lang="css" scoped>
th.text-left.inc-font-size {
  font-size: 1rem;
}

div.container {
  padding-top: 500px;
}
</style>
