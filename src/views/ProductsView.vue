<template>
  <div>
    <h2>Lista de Produtos</h2>

    <div class="list">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

import produto1 from '@/assets/img/produto1.png'
import produto2 from '@/assets/img/produto2.png'
import produto3 from '@/assets/img/produto3.png'
import produto4 from '@/assets/img/produto4.png'

export default {
  components: { ProductCard },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Mouse Gamer',
          price: 'R$ 120',
          image: produto1,
          description: 'Mouse gamer com alta precisão.'
        },
        {
          id: 2,
          name: 'Notebook',
          price: 'R$ 2.500',
          image: produto2,
          description: 'Notebook ideal para estudos e trabalho.'
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
          description: 'Tênis confortável para atividades físicas.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
