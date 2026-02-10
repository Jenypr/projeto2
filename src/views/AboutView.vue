<template>
  <div class="about">
    <h1>Sobre o Site</h1>

    <p>
      Este site foi desenvolvido com o objetivo de facilitar o
      <strong>controle e o gerenciamento de produtos</strong>, oferecendo uma
      interface simples, intuitiva e de fácil navegação para o usuário.
    </p>

    <p>
      Através do sistema, é possível visualizar a lista de produtos cadastrados,
      acessar os detalhes de cada item e realizar novos cadastros de forma rápida
      e organizada.
    </p>

    <h2>Funcionalidades do Site</h2>
    <ul>
      <li>Cadastro de novos produtos</li>
      <li>Listagem de produtos cadastrados</li>
      <li>Visualização de detalhes de cada produto</li>
      <li>Armazenamento dos dados no navegador</li>
    </ul>

    <h2>Experiência do Usuário</h2>
    <p>
      O site foi projetado com um layout limpo e responsivo, garantindo uma boa
      experiência tanto em computadores quanto em dispositivos móveis. A
      navegação entre as páginas é clara, com menu de fácil acesso e separação
      adequada das funcionalidades.
    </p>

    <p>
      Todas as informações são armazenadas utilizando
      <strong>LocalStorage</strong>, o que permite que os dados permaneçam
      salvos mesmo após o fechamento do navegador, sem a necessidade de banco de
      dados ou servidores externos.
    </p>

    <h2>Considerações Finais</h2>
    <p>
      Em resumo, o site oferece uma solução prática para organização de
      produtos, sendo ideal para estudos, testes e simulações de sistemas reais,
      unindo simplicidade, funcionalidade e boa usabilidade.
    </p>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.8;
  font-size: 16px;
}

h1 {
  margin-bottom: 20px;
  color: #244a6d;
}

h2 {
  margin-top: 30px;
  margin-bottom: 10px;
  color: #244a6d;
}

ul {
  margin-left: 20px;
}

li {
  margin-bottom: 6px;
}
</style>
