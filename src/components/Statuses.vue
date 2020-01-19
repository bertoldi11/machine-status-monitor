<template>
  <div class="row">
    <div class="col">
      <h1>Status</h1>
      <router-link to="/status/new" class="btn btn-primary">
        Novo Status
      </router-link>
      <table class="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th colspan="2">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="status in statuses" :key="status.id">
            <td>{{ status.id }}</td>
            <td>{{ status.name }}</td>
            <td>
              <router-link
                :to="{ name: 'statusEdit', params: { id: status.id } }"
                class="btn btn-primary"
              >
                Editar
              </router-link>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteStatus(status)">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Statuses",
  data() {
    return { statuses: [] };
  },
  mounted() {
    axios
      .get("http://192.168.0.8:3000/statuses")
      .then(response => (this.statuses = response.data));
  },
  methods: {
    deleteStatus: function(status) {
      axios
        .delete("http://192.168.0.8:3000/status/" + status.id)
        .then(() => window.location.reload());
    }
  }
};
</script>

<style scoped></style>
