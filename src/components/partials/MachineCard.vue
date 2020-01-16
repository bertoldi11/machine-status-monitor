<template>
  <div class="card" style="width: 22%;">
    <div class="card-body">
      <h5 class="card-title">{{ machine.name }}</h5>
      <p class="card-text">Ultimo status: {{ machine.lastStatus }}</p>
      <div class="actions">
        <button class="btn btn-primary">Editar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachineCard",
  props: {
    machine: Object
  }
};
</script>
