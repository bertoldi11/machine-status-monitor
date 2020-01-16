<template>
  <div class="flex-row">
    <div class="col">
      <h1>Máquinas</h1>
      <MachineCard
        v-for="machine in machines"
        :key="machine.id"
        :machine="machine"
        />
    </div>
  </div>
</template>

<script>
import MachineCard from "@/components/partials/MachineCard.vue";

const machines = [{ name: "Betoneira", id: 1, lastStatus: "Working"}]

export default {
  name: "Machines",
  data() {
    return { machines };
  },
  components: {
    MachineCard
  }
};
</script>

<style scoped></style>
