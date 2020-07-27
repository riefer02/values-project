<template>
  <v-app>
    <Navbar :items="items" v-model="drawer" />
    <v-app-bar app color="#039e9e" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>The Values Project</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <v-footer color="#039e9e" elevation="4" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} The Values Project</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/navigation/Navbar.vue";

export default {
  components: {
    Navbar: Navbar,
  },
  data: () => ({
    drawer: false,
    items: [
      {
        icon: "home",
        text: "Home",
        route: "/",
      },
      {
        icon: "frequently-asked-questions",
        text: "FAQ",
        route: "/faq",
      },
      {
        icon: "test-tube",
        text: "Submit",
        route: "/signup",
      },
      {
        icon: "database",
        text: "Data",
        route: "/data",
      },
    ],
  }),
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

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
