<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Monitoramento de Máquinas</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/machines" class="nav-link">Máquinas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/statuses" class="nav-link">Status</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link">
            Configurações
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
