<template>
  <div>
    <v-card>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left inc-font-size">Value</th>
              <th class="text-left inc-font-size">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in valueData" :key="item.name" class="text-left">
              <td>{{ item.name || "data unknown" }}</td>
              <td>{{ item.count || 0 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueData: null,
      error: null,
      loading: false,
    };
  },
  created() {
    // Fetch the dat when the iew is created and the data is already being observed
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

      this.axios
        .get("/api/v1/data/values")
        .then((res) => {
          this.loading = false;
          this.valueData = res.data.totalValues;
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
</style>
