<template>
  <div>
    <add-admin />
    <admin-list />
  </div>
</template>
      
<script>
import addAdmin from "@/components/admin/add-admin.vue";
import AdminList from "@/components/admin/admin-list.vue";
export default {
  components: { addAdmin, AdminList },
  name: "city-adnin-page",
  data() {
    return {};
  },
};
</script>