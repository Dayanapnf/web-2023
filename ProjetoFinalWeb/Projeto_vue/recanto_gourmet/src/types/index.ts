export type Receita = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: Imagem,
    comentarios: Comentario[]
}

export type Imagem = {
    url: string, 
    alternativeText: string
}

export type Comentário = {
    descricao: string,
    nota: number
}

export type Artigo = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: Imagem
}

export type Usuario = {
    jwt: string,
    id: number,
    username: string,
    email: string,
    role: string
}