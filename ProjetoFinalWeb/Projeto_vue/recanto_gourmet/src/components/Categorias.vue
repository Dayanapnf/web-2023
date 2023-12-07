<template>
    <section class="categoria">

        <div class="categoria-items" @click="filtroCategoria('Pao')">
            <picture>
                <img src="../assets/paes.png" alt="">
            </picture>
            <p>Pães</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Sobremesa')">
            <picture>
                <img src="../assets/sobremesa.png" alt="">
            </picture>
            <p>Sobremesa</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Salgados')">
            <picture>
                <img src="../assets/salgados.png" alt="">
            </picture>
            <p>Salgados</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Sopas')">
            <picture>
                <img src="../assets/sopas.png" alt="">
            </picture>
            <p>Sopas</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Comida')">
            <picture>
                <img src="../assets/comida.png" alt="">
            </picture>
            <p>Comida</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Massas')">
            <picture>
                <img src="../assets/massa.png" alt="">
            </picture>
            <p>Massas</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Aves')">
            <picture>
                <img src="../assets/aves.png" alt="">
            </picture>
            <p>Aves</p>
        </div>

    </section>
</template>

<style scoped>

.pesquisar {
    max-width: 300px;
    margin: 0 auto;
}

.pesquisar input {
    border-radius: 40px;
}

.titulo {
    margin-bottom: 40px;
}

.pesquisar img {
    position: relative;
    width: 30px;
    height: 30px;
    left: 250px;
    top: 45px;
}

.nenhuma-encontrada {
    text-align: center;
    clear: both;
}

.sobremesa-selecionada {
    position: relative;
    color: #fff;
    float: right;
    top: -40px;
    margin-right: 30px;
}

.sobremesa-selecionada span {
    background-color: #ffa982;
    padding: 6px;
    border-radius: 10px;
}

.fechar-sobremesa {
    position: absolute;
    top: -14px;
    right: -6px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    font-size: 12px;
    background-color: rgb(243, 223, 223);
}

</style>