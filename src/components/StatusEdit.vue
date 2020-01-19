<template>
  <div>
    <h1>Status</h1>
    <StatusForm :status="status" :submitMethod="updateStatus" />
  </div>
</template>

<script>
import axios from "axios";
import StatusForm from "@/components/partials/StatusForm.vue";

export default {
  name: "statusEdit",
  data() {
    return { status: { id: null, name: "" } };
  },
  mounted() {
    axios
      .get("http://192.168.0.8:3000/status/" + this.$route.params.id)
      .then(response => (this.status = response.data));
  },
  components: {
    StatusForm
  },
  methods: {
    updateStatus: function(status) {
      axios
        .put("http://192.168.0.8:3000/status/" + status.id, status)
        .then(() => this.$router.push({ name: "statuses" }));
    }
  }
};
</script>

<style scoped></style>
