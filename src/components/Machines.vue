<template>
  <div class="row">
    <div class="col">
      <router-link to="/machine/new" class="btn btn-primary">
        Nova Máquina
      </router-link>
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
import config from "@/config.js";

export default {
  name: "Machines",
  data() {
    return { machines: [] };
  },
  mounted() {
    axios
      .get(config.apiUrl + "/machines")
      .then(response => (this.machines = response.data));
  },
  components: {
    MachineCard
  }
};
</script>

<style scoped></style>
