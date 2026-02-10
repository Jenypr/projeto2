<template>
  <div class="container">
    <h1>Cadastrar Produto</h1>
    <hr />

    <div class="form">
      <input type="text" placeholder="Nome" v-model="name" />
      <input type="number" placeholder="Preço" v-model="price" />
      <button @click="addProduct">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    addProduct() {
      if (!this.name || !this.price) {
        alert('Preencha todos os campos')
        return
      }

      const products = JSON.parse(localStorage.getItem('products')) || []
      products.push({ name: this.name, price: this.price })
      localStorage.setItem('products', JSON.stringify(products))

      this.name = ''
      this.price = ''
      alert('Produto cadastrado com sucesso!')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 60px auto;
  text-align: center;
}

h1 {
  color: #244a6d;
  margin-bottom: 10px;
}

hr {
  margin-bottom: 40px;
  border: none;
  height: 1px;
  background: #ddd;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form input {
  padding: 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.form button {
  margin-top: 10px;
  padding: 14px;
  background: #2f6fad;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.form button:hover {
  background: #244a6d;
}
</style>
