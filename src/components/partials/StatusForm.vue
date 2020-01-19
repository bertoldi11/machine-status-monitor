<template>
  <form class="form-container">
    <div class="form-group">
      <label for="statusName">Nome do Status</label>
      <input
        type="text"
        v-model="status.name"
        class="form-control"
        id="statusName"
      />
    </div>
    <button
      type="button"
      v-on:click="submitMethod(status)"
      class="btn btn-primary"
    >
      Salvar
    </button>
  </form>
</template>

<script>
export default {
  name: "StatusForm",
  props: {
    status: Object,
    submitMethod: Function
  }
};
</script>

<style scoped>
.form-container {
  max-width: 50%;
}
</style>
