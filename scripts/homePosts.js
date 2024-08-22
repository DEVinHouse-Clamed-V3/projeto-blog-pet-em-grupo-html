function carregarDados() {
    const postsNaMemoria = JSON.parse(localStorage.getItem("posts")) /*peguei a string do localstorage e transformei em array e guardei na variavel*/
    const lista = document.getElementById("lista-posts")
    
    postsNaMemoria.forEach((post) => {
        console.log(post.id)
        const div = document.createElement("div")
        div.classList.add("item-post")/*geração da div e atribuição da classe*/

        const img = document.createElement("img")
        img.setAttribute("width", "150px")
        img.setAttribute("src", post.foto)

        div.append(img)

        const h3 = document.createElement("h3")
        h3.innerText = post.tipo
        div.append(h3)

        const h2 = document.createElement("h2")
        h2.innerText = post.titulo
        div.append(h2)

        const h5 = document.createElement("h5")
        h5.innerText = post.dataCriacao
        div.append(h5)

        lista.append(div)

    });




}


document.addEventListener("DOMContentLoaded", carregarDados) /*dom funciona quando a pagina for renderizada, dispara a função*/