<template>
  <div class="container">
    <h1>Cadastrar Produto</h1>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="preco" placeholder="Preço" type="number" />

    <button @click="cadastrar">Cadastrar</button>

    <h2>Lista de Produtos</h2>

    <ul>
      <li v-for="(p, index) in produtos" :key="index">
        {{ p.nome }} - R$ {{ p.preco }}
        <button @click="remover(index)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      preco: '',
      produtos: []
    }
  },

  mounted() {
    // Carrega do localStorage quando a página abre
    const dados = localStorage.getItem('produtos')
    if (dados) {
      this.produtos = JSON.parse(dados)
    }
  },

  methods: {
    cadastrar() {
      if (!this.nome || !this.preco) {
        alert('Preencha tudo')
        return
      }

      this.produtos.push({
        nome: this.nome,
        preco: this.preco
      })

      // Salva no localStorage
      localStorage.setItem('produtos', JSON.stringify(this.produtos))

      this.nome = ''
      this.preco = ''
    },

    remover(index) {
      this.produtos.splice(index, 1)
      localStorage.setItem('produtos', JSON.stringify(this.produtos))
    }
  }
}
</script>

<style>
.container {
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
