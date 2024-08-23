function carregarPost() {
    const postsLocalStorage = JSON.parse(localStorage.getItem('posts'))

    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const postId = (params.get('id'))

    const postEncontrado = postsLocalStorage.find((item) => item.id == postId)

    if(postEncontrado === undefined) {
        window.location.href = "pag404.html"
    } else {
        
        document.getElementById('titulo').innerText = postEncontrado.titulo
        document.getElementById('foto').setAttribute('src', postEncontrado.foto)
        document.getElementById('descricao').innerText = postEncontrado.descricao
        document.getElementById('data-criacao').innerText = postEncontrado.dataCriacao
        document.getElementById('categoria').innerText = postEncontrado.categoria
        document.getElementById('botao').onclick = () => window.location.href = "index.html"
    }

}

document.addEventListener('DOMContentLoaded', carregarPost)