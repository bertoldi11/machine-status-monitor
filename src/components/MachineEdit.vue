<template>
  <div class="flex-row">
    <div class="col">
      <h1>{{ machine.name }}</h1>
      <MachineForm :machine="machine" :submitMethod="updateMachine" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MachineForm from "@/components/partials/MachineForm.vue";
import config from "@/config.js";

export default {
  name: "machineEdit",
  data() {
    return { machine: { id: null, name: "" } };
  },
  mounted() {
    axios
      .get(config.apiUrl + "/machine/" + this.$route.params.id)
      .then(response => (this.machine = response.data));
  },
  components: {
    MachineForm
  },
  methods: {
    updateMachine: function(machine) {
      axios
        .put(config.apiUrl + "/machine/" + machine.id, machine)
        .then(() => this.$router.push({ name: "machines" }));
    }
  }
};
</script>
