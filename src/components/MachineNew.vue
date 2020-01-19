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
        .post("http://192.168.0.8:3000/machines", machine)
        .then(() => this.$router.push({ name: "machines" }));
    }
  }
};
</script>
