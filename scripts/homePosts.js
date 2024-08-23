function carregarDados() {
    const postsNaMemoria = JSON.parse(localStorage.getItem("posts")) /*peguei a string do localstorage e transformei em array e guardei na variavel*/
    const lista = document.getElementById("lista-posts")
    
    postsNaMemoria.forEach((post) => {
        console.log(post.id)
        const div = document.createElement("div")
        div.classList.add("item-post")/*geração da div e atribuição da classe*/

        const img = document.createElement("img")
        img.setAttribute("width", "120px")
        img.setAttribute("src", post.foto)
        img.addEventListener('dblclick', () => {
            window.location.href = "././post.html"});

        div.append(img)

        const h5 = document.createElement("h5")
        h5.innerText = post.tipo
        div.append(h5)

        const h4 = document.createElement("h4")
        h4.innerText = post.titulo
        div.append(h4)

        const div1 = document.createElement("div1")
        div1.classList.add("item-data")
        div.append(div1)

        const h6 = document.createElement("h6")
        h6.innerText = post.dataCriacao
        div1.append(h6)

        const h7 = document.createElement("h7")
        h7.innerText = (post.descricao.length/200)+" minutos"
        div1.append(h7)

        lista.append(div)

    });




}

document.addEventListener("DOMContentLoaded", carregarDados) /*dom funciona quando a pagina for renderizada, dispara a função*/