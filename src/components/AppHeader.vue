<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/img/vue-logo.png" />
    </div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/produtos">Produtos</router-link>
      <router-link to="/cadastrar">Cadastrar</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #244a6d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
}

.logo img {
  height: 28px;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
}
</style>
