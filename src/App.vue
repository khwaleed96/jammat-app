<template>
  <v-app>
    <v-main>
      <app-bar v-if="!guestMode" />
      <v-sheet
        v-if="!guestMode"
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <v-container class="tw-mt-40">
          <router-view />
        </v-container>
      </v-sheet>

      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./components/app-bar.vue";
export default {
  components: { appBar },
  name: "App",

  data: () => ({
    guestMode: true,
    guestRoutes: ["welcome", "login", "signup"],
  }),
  created() {
    if (this.guestRoutes.includes(this.$route.name)) {
      this.guestMode = true;
    } else {
      this.guestMode = false;
    }
  },
  watch: {
    $route(to) {
      if (this.guestRoutes.includes(to.name)) {
        this.guestMode = true;
      } else {
        this.guestMode = false;
      }
    },
  },
};
</script>

<style lang="scss">
*,
html,
body {
  box-sizing: border-box;
}
</style>
