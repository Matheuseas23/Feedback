let botoes = document.querySelectorAll(".Botoes button")
Botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText
    localStorage.setItem ("nota", nota)
}