<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
