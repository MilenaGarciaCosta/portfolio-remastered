const conteudo = document.querySelector('.aside-direita')
const botoes = document.querySelectorAll('.btn')
const sobre_btn = document.querySelector('#sobre')
const habilidades_btn = document.querySelector('#habilidades')
const educacao_btn = document.querySelector('#educacao')
const projetos_btn= document.querySelector('#projetos')

sobre_btn.addEventListener('click', () =>{
    alterarConteudo('sobre')
    sobre_btn.classList.add('ativo')
})

habilidades_btn.addEventListener('click', () =>{
    alterarConteudo('habilidades')
    habilidades_btn.classList.add('ativo')
})

educacao_btn.addEventListener('click', () =>{
    alterarConteudo('educacao')
    educacao_btn.classList.add('ativo')
})

projetos_btn.addEventListener('click', () =>{
    alterarConteudo('projetos')
    projetos_btn.classList.add('ativo')
})

function alterarConteudo(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('ativo')
    })
    switch (contexto) {
        case 'sobre':
            conteudo.innerHTML = `
            <h1>Sobre mim</h1>
                <div class="conteudo">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá mundo! Seja bem-vindo(a) ao meu portfólio.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sou técnica em <strong>desenvolvimento de sistemas</strong> e estudante de <strong>engenharia de software</strong>. Minha paixão pela tecnologia, junto com a sua constante evolução, aumentam minha vontade de aprender novas coisas para melhorar a eficiência e qualidade de tudo que faço.</p>
                </div>
            `
            break;
        case 'habilidades':
            conteudo.innerHTML = `
            <h1>Habilidades</h1>
                <div class="conteudo">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                </div>
            `
            break;
        case 'educacao':
            conteudo.innerHTML= `
            <h1>Educação</h1>
                <div class="conteudo">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                </div>
            `
            break;
        case 'projetos':
            conteudo.innerHTML = `
            <h1>Projetos</h1>
                <div class="conteudo">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quia quos et adipisci sunt? Sit nisi ad quasi sequi delectus minus laborum voluptas, similique, quisquam ab natus ullam necessitatibus error.</p>
                </div>
            `
            break;
        default: 'sobre'
            break;
    }
}