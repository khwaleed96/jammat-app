<template>
  <div class="text-right">
    <v-btn color="blue-grey darken-4" dark @click="sheet = !sheet">
      Add new Admin
    </v-btn>
    <v-bottom-sheet v-model="sheet" :fullscreen="true">
      <v-sheet class="text-center" height="100%">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of
          activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
        
  <script>
export default {
  name: "add-city-adnin",
  data() {
    return {
      sheet: false,
    };
  },
};
</script>