<template>
  <div class="flex-row">
    <div class="col">
      <h1>Nova máquina</h1>
      <MachineForm :machine="machine" :submitMethod="addMachine" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MachineForm from "@/components/partials/MachineForm.vue";
import config from "@/config.js";

export default {
  name: "MachineNew",
  data() {
    return { machine: { id: null, name: "" } };
  },
  components: {
    MachineForm
  },
  methods: {
    addMachine: function(machine) {
      axios
        .post(config.apiUrl + "/machines", machine)
        .then(() => this.$router.push({ name: "machines" }));
    }
  }
};
</script>
