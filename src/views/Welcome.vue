<template>
  <div class="welcome-page tw-w-full tw-h-screen">
    <div
      class="tw-z-90 tw-flex tw-flex-col tw-justify-between tw-h-screen tw-p-4"
    >
      <div
        class="log tw-mx-auto tw-mt-20 tw-text-6xl tw-text-[#fff] tw-font-bold tw-z-10"
      >
        JM
      </div>

      <div class="buttons tw-w-full tw-mb-6">
        <v-btn class="mb-4" block large :to="{ name: 'login' }">Login</v-btn>
        <v-btn block large :to="{ name: 'signup' }">Sign up</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-page",

  components: {},
};
</script>

<style lang="scss" scoped>
.welcome-page {
  background-image: url("@/assets/images/welcome_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
}
</style>
