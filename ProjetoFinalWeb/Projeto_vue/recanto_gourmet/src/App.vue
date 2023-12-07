<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}


label, textarea {
  margin-bottom: 5px;
}

input, textarea, select {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover, input:focus, textarea:focus, textarea:hover {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #6f9a37;
}

* {
  box-sizing: border-box;
  font-family: apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
}

body, ul, li, h1, h2, p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.btn {
  padding: 10px 30px;
  background: #759F41;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgb(30 60 90 / 20%);
  transition: all .3s;
  border: none;
  font-family: apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
  cursor: pointer;
}

.titulo {
  text-align: center;
  font-size: 2rem;
  margin: 60px 0px;
}

.receitas {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
  clear: both;
}

.receitas div {
  flex: 1;
}

.receitas img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  -webkit-filter:grayscale(0%)
}

.receitas img:hover{
  transition: all 0.5s ease;
  transform: scale(1.1);
  -webkit-filter:grayscale(20%);
}

.receitas span {
  position: relative;
  bottom: 28px;
  background-color: #fff;
  padding: 5px;
  display: block;
  text-align: center;
  max-width: 100px;
  margin: 0 auto;
  border-radius: 4px;
  color: #727b7a;
}

.receitas p {
  text-align: center;
  color: #000;
  font-size: 18px;
  margin-top: -20px;
  margin-bottom: 20px;
}

.container {
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;
}

@media (max-width: 835px) {
  .logo-footer {
    margin-top: 40px;
  }
}

@media (max-width: 720px) {
  .categoria {
    display: none !important;
  }

  .titulo {
    margin-top: 40px;
  }

  .receitas {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }

  .receitas span {
    font-size: 14px;
  }

  form {
    max-width: 100% !important;
  }
}

@media (max-width: 490px) {
  .receitas {
    display: block;
    margin: 30px 0 40px 0;
  }

  .receitas > div {
    margin-bottom: 60px;
  }

  .receitas img:hover{
    transform: scale(1.0);
  }
}
</style>

