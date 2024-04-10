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
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Olá mundo! Seja bem-vindo(a) ao meu portfólio.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sou técnica em <strong>desenvolvimento de sistemas</strong> e estudante de <strong>engenharia de software</strong>. Minha paixão pela tecnologia, junto com a sua constante evolução, aumentam minha vontade de aprender novas coisas para melhorar a eficiência e qualidade de tudo que faço.</p>
                    <p class="margem-p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atualmente <strong>busco pela minha primeira oportunidade de estágio</strong>, onde vou aprender e aprimorar habilidades. Caso se interesse, entre em contato!</p>
                </div>
            `
            break;
        case 'habilidades':
            conteudo.innerHTML = `
            <h1>Habilidades</h1>
          <div class="conteudo">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atualmente tenho estudado vários
              assuntos para descobrir onde me encaixo e me desenvolvo melhor.
              Aqui vou apresentar minhas habilidades principais:
            </p>
            <section class="grid-habilidades">
              <div class="container-habilidades escuro">
                <div class="titulo-habilidades">
                  <img src="img/ingles.png" alt="inglês" />
                  <h5>Inglês como segunda língua</h5>
                </div>
                <p>
                  &nbsp;&nbsp; Sou brasileira com inglês avançado como segunda
                  língua.
                </p>
              </div>

              <div class="container-habilidades claro">
                <div class="titulo-habilidades">
                  <img src="img/web-dev.png" alt="desenvolvimento web" />
                  <h5>Desenvolvimento web</h5>
                </div>
                <p>
                  &nbsp;&nbsp; HTML5, CSS3, JavaScript, Bootstrap e Tailwind.
                </p>
              </div>

              <div class="container-habilidades escuro">
                <div class="titulo-habilidades">
                  <img src="img/branch.png" alt="inglês" />
                  <h5>Versionamento de projetos</h5>
                </div>
                <p>
                  &nbsp;&nbsp; Utilizo a plataforma GitHub para auxiliar no
                  versionamento dos meus projetos.
                </p>
              </div>

              <div class="container-habilidades claro">
                <div class="titulo-habilidades">
                  <img src="img/banco-de-dados.png" alt="desenvolvimento web" />
                  <h5>Banco de dados</h5>
                </div>
                <p>
                  &nbsp;&nbsp; Tenho conhecimento intermediário de banco de
                  dados com MySql Worckbench.
                </p>
              </div>

              <div class="container-habilidades escuro">
                <div class="titulo-habilidades">
                  <img src="img/scrum.png" alt="inglês" />
                  <h5>Metodologias ágeis</h5>
                </div>
                <p>
                  &nbsp;&nbsp; Utilizei a metodologia Scrum para melhorar a
                  eficiência do meu TCC.
                </p>
              </div>

              <div class="container-habilidades claro">
                <div class="titulo-habilidades">
                  <img src="img/acessibilidade.png" alt="desenvolvimento web" />
                  <h5>Design acessivel</h5>
                </div>
                <p>
                  &nbsp;&nbsp; Utilizo mobile-first para
                  melhorar a responsividade e acessibilidade.
                </p>
              </div>
            </section>
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
        default:
            break;
    }
}