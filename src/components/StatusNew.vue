<template>
  <div>
    <h1>Novo Status</h1>
    <StatusForm :status="status" :submitMethod="addStatus" />
  </div>
</template>

<script>
import axios from "axios";
import StatusForm from "@/components/partials/StatusForm.vue";

export default {
  name: "statusNew",
  data() {
    return { status: { id: null, name: "" } };
  },
  components: {
    StatusForm
  },
  methods: {
    addStatus: function(status) {
      axios
        .post("http://192.168.0.8:3000/statuses", status)
        .then(() => this.$router.push({ name: "statuses" }));
    }
  }
};
</script>

<style scoped></style>
