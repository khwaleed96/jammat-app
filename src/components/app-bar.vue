<template>
  <div>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ pageTitle }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="blue-grey darken-4" size="42">
              <span class="white--text tw-text-lg">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="blue-grey darken-4">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3 class="mt-1">{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Profile </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Logout </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="grey--text text--darken-4"
        >
          <v-list-item :to="{ name: 'dashboard' }">
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'cityAdmin' }">
            <v-list-item-title>City admins</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'ammartSecretary' }">
            <v-list-item-title>Ammrat sectary</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'halqaSecetary' }">
            <v-list-item-title>Halqa sectary</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'studant' }">
            <v-list-item-title>Studants</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
  data() {
    return {
      user: {
        initials: "JD",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
      drawer: false,
      group: null,
      pageTitle: "",
    };
  },
  created() {
    this.pageTitle = this.$route.meta.title;
  },
  watch: {
    group() {
      this.drawer = false;
    },
    $route(to) {
      this.pageTitle = to.meta.title;
    },
  },
};
</script>