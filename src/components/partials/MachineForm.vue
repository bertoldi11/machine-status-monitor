<template>
  <form class="form-container">
    <div class="form-group">
      <label for="machineName">Nome da máquina</label>
      <input
        type="text"
        v-model="machine.name"
        class="form-control"
        id="machineName"
      />
    </div>
    <button
      type="button"
      v-on:click="submitMethod(machine)"
      class="btn btn-primary"
    >
      Salvar
    </button>
  </form>
</template>

<script>
export default {
  name: "MachineForm",
  props: {
    machine: Object,
    submitMethod: Function
  }
};
</script>

<style scoped>
.form-container {
  max-width: 50%;
}
</style>
