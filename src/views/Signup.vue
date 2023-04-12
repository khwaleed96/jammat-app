<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-p-3">
    <div class="">
      <h2 class="tw-text-2xl tw-text-center mb-5 mt-4 tw-font-bold">Sign up</h2>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="name"
              label="Name"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="phone"
              label="Phone number"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="postal_address"
              label="Postal address"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Ammart"
              outlined
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Halqa"
              outlined
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Role"
              outlined
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="city"
              label="City"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="confirmPassword"
              label="Confirm password"
              type="password"
              required
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              :disabled="loading"
              color="black"
              dark
              @click="login"
              block
              x-large
            >
              Signup
            </v-btn>

            <p class="tw-text-center tw-mt-6">
              Already have an account?
              <router-link :to="{ name: 'login' }">Login</router-link>
            </p>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "signup-page",
  data() {
    return {
      loading: false,
      valid: true,
      name: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 8) || "Name must be less than 8 characters",
        (v) => v != this.password || "Password did not match.",
      ],
      confirmPassword: "",
      phone: "",
      postal_address: "",
      jammat: "",
      ammart_id: "",
      halqa_id: "",
      status: "",
      user_role_id: "",
      city: "",
      items: [1, 2, 3, 4],
    };
  },

  methods: {
    login() {},
  },
};
</script>