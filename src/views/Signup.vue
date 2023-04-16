<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-p-3">
    <div class="">
      <h2 class="tw-text-2xl tw-text-center mb-5 mt-4 tw-font-bold">Sign up</h2>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="user.name"
              label="Name"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="user.email"
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
              v-model="user.phone"
              label="Phone number"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="user.postal_address"
              label="Postal address"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Ammart"
              outlined
              dense
              hide-details="auto"
              v-model="user.ammart_id"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Halqa"
              outlined
              dense
              hide-details="auto"
              v-model="user.halqa_id"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Role"
              outlined
              dense
              v-model="user.user_role_id"
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="user.city"
              label="City"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.password_confirmation"
              label="Confirm password"
              type="password"
              required
              outlined
              dense
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
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        postal_address: "",
        jammat: "",
        ammart_id: "",
        halqa_id: "",
        status: "",
        user_role_id: "",
        city: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 8) || "Name must be less than 8 characters",
        (v) => v != this.password || "Password did not match.",
      ],
      items: [1, 2, 3, 4],
    };
  },

  methods: {
    login() {
      const validate = this.$refs.form.validate();
      if (validate) {
        const payload = this.user;
        this.$store
          .dispatch("login", payload)
          .then((resp) => {
            if (resp) {
              this.$router.push({ name: "login" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>