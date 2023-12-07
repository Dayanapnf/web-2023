<script setup lang="ts">

</script>

<template>
    <section id="header">

        <div id="menu" class="container">

            <div>
                <router-link to="/">
                    <picture>
                        <img id="logo" src="../assets/logo_rc.png" alt="Logo da empresa">
                    </picture>
                </router-link>
            </div>

            <nav>
                <ul>
                    <li><router-link to="/">Receitas</router-link></li>
                    <li><router-link to="/minhas-receitas">Minhas Receitas</router-link></li>
                </ul>
            </nav>
            <!--
            <div class="entrar-header">
                <picture>
                    <img v-if="!$store.state.usuarioLogado" src="../assets/icon-pessoa.png" alt="">
                </picture>
                <button v-if="$store.state.usuarioLogado" @click="deslogarUsuario" class="btn deslogar">Sair</button>
                <router-link v-else to="/login"><button class="btn">Login</button></router-link>
            </div>
            -->
        </div>

    </section>
</template>


<style>

#header {
    background-color: #F3F5F6;
}

#menu {
    padding: 10px 0px;
    align-items: center;
    display: flex;
    justify-content: space-around;
}

#menu img {
    max-width: 250px;
}

#menu ul {
    display: flex;
    align-items: center;
}

#menu ul li:nth-child(1) {
    margin-right: 20px;
}

#menu ul li:first-child::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    margin-left: 10px;
}

#menu ul li a {
    color: #070d00;
    font-size: 22px;
}

#menu ul li a:hover {
    color: #FC834B;
}

.entrar-header {
    display: flex;
    align-items: center;
}

.entrar-header img {
    width: 30px;
    margin-right: 10px;
}

.entrar-header button:hover {
    transform: scale(1.2);
}

.deslogar {
    background-color: red!important;
}

.entrar-header span {
    margin-right: 15px;
}

#menu ul li a.router-link-exact-active {
    color: #FC834B;
}

@media (max-width: 690px) {
    #menu {
        display: block;
    }
    #menu #logo {
        display: block;
        margin: 0 auto;
    }
    #menu ul {
        margin-top: 20px;
        justify-content: center;
        margin-bottom: 20px;
    }
    .entrar-header {
        display: flex;
        justify-content: center;
    }
    #menu ul li a {
        color: #759F41;
        font-size: 1rem;
    }
    #menu ul li:first-child::after {
        display: none;
    }
    .entrar-header picture {
        display: none;
    }
}   

</style>