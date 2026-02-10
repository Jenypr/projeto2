<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>

    <router-link :to="`/produto/${product.id}`" class="btn">
      Detalhes
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 220px;
  text-align: center;
}

img {
  width: 100%;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background: #1e4f91;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
