<template>
  <div class="row">
    <div class="col">
      <h1>Máquinas</h1>
      <div class="d-flex flex-row justify-content-between flex-wrap">
        <MachineCard
          v-for="machine in machines"
          :key="machine.id"
          :machine="machine"
          />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MachineCard from "@/components/partials/MachineCard.vue";

export default {
  name: "Machines",
  data() {
    return { machines: [] };
  },
  mounted() {
    axios
      .get("http://192.168.0.8:3000/machines")
      .then(response => (this.machines = response.data));
  },
  components: {
    MachineCard
  }
};
</script>

<style scoped></style>
