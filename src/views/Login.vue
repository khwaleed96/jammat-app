<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-p-3">
    <div class="">
      <h2 class="tw-text-2xl tw-text-center mb-5 mt-4 tw-font-bold">Login</h2>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              dense
              outlined
              required
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              :disabled="loading"
              dark
              color="black"
              @click="login"
              block
              x-large
            >
              Login
            </v-btn>

            <p class="tw-text-center tw-mt-6">
              Don't have an account?
              <router-link :to="{ name: 'signup' }">Sign up</router-link>
            </p>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      loading: false,
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 8) || "Name must be less than 8 characters",
      ],
    };
  },

  methods: {
    login() {},
  },
};
</script>