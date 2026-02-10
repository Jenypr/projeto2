<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/produtos">Produtos</router-link>
    <router-link to="/cadastrar">Cadastrar</router-link>
    <router-link to="/sobre">Sobre</router-link>
  </nav>
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  background: #222;
  padding: 15px;
}
a {
  color: white;
  text-decoration: none;
}
</style>