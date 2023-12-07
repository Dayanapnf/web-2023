<template>
    <section class="container" id="pagina-inicial">

        <div class="categoria">
            <h1 class="titulo">Navegue pelas categorias</h1>
            <Categorias/>
        </div>

        <div>
            <h1 class="titulo">Todas as receitas</h1>
            <ProdutoBuscar/>
        </div>
        
        <div v-if="!carregou">
            <PageLoading/>
        </div>

        <div v-else>

            <div v-if="filtroPorCategoria || filtroPorPesquisa" class="sobremesa-selecionada">

                <div>
                    <span v-if="filtroPorCategoria">{{filtroPorCategoria}}</span>
                    <span v-else>{{filtroPorPesquisa}}</span>
                    
                    <button @click="tirarFiltroDasReceita" class="fechar-sobremesa">X</button>
                </div>

            </div>

            <div class="receitas" v-if="receitas.length > 0">

                <div v-for="(receita, index) in receitas" :key="receita + index">

                    <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">

                        <div>
                            <img :src="receita.imagem" alt="">
                        </div>

                        <div>
                            <span>{{receita.categoria}}</span>
                            <p>{{receita.nome_receita}}</p>
                        </div>

                    </router-link>

                </div>

            </div>

            <div v-else>
                <p class="nenhuma-encontrada">Nenhum receita encontrada! :(</p>
            </div>
            
            <div>
                <Paginar :quantidadeDeReceita="quantidadeDeReceita"></Paginar>
            </div>

        </div>

    </section>
</template>