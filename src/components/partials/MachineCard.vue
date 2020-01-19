<template>
  <div class="card" style="max-width: 25%;">
    <div class="card-body">
      <h5 class="card-title">{{ machine.name }}</h5>
      <p class="card-text">Ultimo status: {{ getLastStatus(machine) }}</p>
      <div class="actions">
        <router-link
          :to="{ name: 'machineEdit', params: { id: machine.id } }"
          class="btn btn-primary"
        >
          Editar
        </router-link>
        &nbsp;
        <button class="btn btn-danger" v-on:click="deleteMachine(machine)">
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.js";

export default {
  name: "MachineCard",
  props: {
    machine: Object
  },
  methods: {
    deleteMachine: function(machine) {
      axios
        .delete(config.apiUrl + "/machine/" + machine.id, machine)
        .then(() => window.location.reload());
    },
    getLastStatus: function(machine) {
      if (machine.status.length > 0) return machine.status[0].name;
      return "Nenhum status registrado"
    }
  }
};
</script>
