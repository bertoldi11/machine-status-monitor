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

export default {
  name: "machineEdit",
  data() {
    return { machine: { id: null, name: "" } };
  },
  mounted() {
    axios
      .get("http://192.168.0.8:3000/machine/" + this.$route.params.id)
      .then(response => (this.machine = response.data));
  },
  components: {
    MachineForm
  },
  methods: {
    updateMachine: function(machine) {
      axios
        .put("http://192.168.0.8:3000/machine/" + machine.id, machine)
        .then(() => this.$router.push({ name: "machines" }));
    }
  }
};
</script>
