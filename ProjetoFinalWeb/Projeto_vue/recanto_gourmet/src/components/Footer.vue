<script setup lang="ts"></script>

<template>
  <footer>
    <div class="container">
      <div class="receber-novidades">
        <h3>Receba nossas novidades</h3>

        <div class="email">
          <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
          <button class="btn">Enviar</button>
        </div>
      </div>

      <div class="redes-sociais">
        <h3>Redes Sociais</h3>

        <picture>
          <img src="../assets/facebook.png" alt="Logo Facebook" />
          <img src="../assets/instagram.png" alt="Logo Instragam" />
          <img src="../assets/twitter.png" alt="Logo Twitter" />
        </picture>
      </div>

      <picture class="logo-footer">
        <img src="../assets/logo_rc.png" alt="" />
      </picture>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #f3f5f6;
  padding: 20px 0px 40px;
  margin-top: 60px;
  position: relative;
  top: 0px;
}

footer h3 {
  color: #759f41;
  text-align: center;
}

footer > div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

footer img {
  max-width: 250px;
}

.redes-sociais img {
  width: 40px;
  margin: 0px 10px;
}

.receber-novidades input {
  margin: 0px;
  border-radius: 50px;
}

.email {
  display: flex;
  align-items: center;
}

.email .btn {
  margin-left: 10px;
}

@media (max-width: 583px) {
  .redes-sociais {
    margin-top: 40px;
  }
}
</style>
