<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/faq">FAQ</router-link> |
        <router-link to="/signup">Submit</router-link> |
        <router-link to="/data">Data</router-link>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<script></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c4b50;
}

#nav {
  padding: 30px;
  font-size: 1.3rem;

  a {
    font-weight: bold;
    color: #2c4b50;

    &.router-link-exact-active {
      color: #039e9e;
    }
  }
}
</style>
