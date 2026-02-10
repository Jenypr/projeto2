<template>
  <div class="details">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" />
    <p class="price">{{ product.price }}</p>
    <p class="description">{{ product.description }}</p>
  </div>
</template>

<script>
import produto1 from '../assets/img/produto1.png'
import produto2 from '../assets/img/produto2.png'
import produto3 from '../assets/img/produto3.png'
import produto4 from '../assets/img/produto4.png'

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Mouse Gamer',
          price: 'R$ 120',
          image: produto1,
          description: 'Mouse gamer com alta precisão, botões extras e iluminação RGB.'
        },
        {
          id: 2,
          name: 'Notebook',
          price: 'R$ 2.500',
          image: produto2,
          description: 'Notebook rápido e eficiente para estudos, trabalho e programação.'
        },
        {
          id: 3,
          name: 'Fone de Ouvido',
          price: 'R$ 80',
          image: produto3,
          description: 'Fone de ouvido com excelente qualidade de som.'
        },
        {
          id: 4,
          name: 'Tênis Esportivo',
          price: 'R$ 150',
          image: produto4,
          description: 'Tênis esportivo com solado macio, perfeito para caminhadas, academia e uso diário.'
        }
      ],
      product: {}
    }
  },

  created() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find(p => p.id === id)
  }
}
</script>

<style scoped>
.details {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

img {
  max-width: 300px;
  margin: 20px 0;
}

.price {
  font-weight: bold;
  font-size: 18px;
}
</style>
