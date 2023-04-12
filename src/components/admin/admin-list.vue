<template>
  <div>
    <v-card elevation="0" class="tw-p-0">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        dense
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>
        
  <script>
export default {
  name: "city-adnin-list",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
      ],
    };
  },
};
</script>