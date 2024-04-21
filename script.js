const conteudo = document.querySelector('.aside-direita');
const botoes = document.querySelectorAll('.btn');
const sobre_btn = document.querySelector('#sobre');

const habilidades_btn = document.querySelector('#habilidades');
const educacao_btn = document.querySelector('#educacao');
const projetos_btn = document.querySelector('#projetos');
const alerta_hidden = document.querySelector('.transferencia_func');
const button = document.querySelector('#button');

const projeto_hidden = document.querySelector(".projeto_func");
const projeto_container_btn = document.querySelectorAll(".projetos-container");
const fechar_btn = document.querySelector(".btn-fechar");
const vinheria_pjt = document.querySelector('.vinheria');
const gameStore_pjt = document.querySelector('.game-store');
const chiquito_pjt = document.querySelector('.chiquito');
const kosManager_pjt = document.querySelector('.kos-manager');
const titulo_pjt = document.querySelector('.projeto-titulo'); // textContent
const img_pjt = document.querySelector('.img-projeto-popUp'); // setAttribute
const tecnologias_pjt = document.querySelector('.utilizadas');// textContent
const link_pjt = document.querySelector('.link'); // textContent
const textoDesc_pjt = document.querySelector('.projeto-texto-desc'); // textContent

// ATRIBUINDO CONTEXTOS PARA CADA ITEM DO MENU
sobre_btn.addEventListener('click', () => {
  alterarConteudo('sobre')
  sobre_btn.classList.add('ativo')
})

habilidades_btn.addEventListener('click', () => {
  alterarConteudo('habilidades')
  habilidades_btn.classList.add('ativo')
})

educacao_btn.addEventListener('click', () => {
  alterarConteudo('educacao')
  educacao_btn.classList.add('ativo')
})

projetos_btn.addEventListener('click', () => {
  alterarConteudo('projetos')
  projetos_btn.classList.add('ativo')
})

// FUNÇÃO PARA MUDAR CONTEÚDO DE ACORDO COM CONTEXTO MENU
function alterarConteudo(contexto) {
  botoes.forEach(function (contexto) {
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
            <section class="grid">
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
      conteudo.innerHTML = `
            <h1>Educação</h1>
          <div class="conteudo">
            <section class="grid gap">
              <div class="educacao-container">
                <img src="img/side-line.png" alt="">
                <div>
                  <p class="titulo">Etec Ermelinda</p>
                  <p class="descricao-titulo">Curso técnico de Desenvolvimento de Sistemas</p>
                  <p class="periodo-educacao">2021 - 2023</p>
                </div>
              </div>

              <div class="educacao-container">
                <img src="img/side-line.png" alt="">
                <div>
                  <p class="titulo">FIAP</p>
                  <p class="descricao-titulo">Bacharelado em Engenharia de Software</p>
                  <p class="periodo-educacao">2024 - 2027</p>
                </div>
              </div>

              <div class="educacao-container">
                <img src="img/side-line.png" alt="">
                <div>
                  <p class="titulo">Excellent Global</p>
                  <p class="descricao-titulo">Curso de inglês (A1 ao C2)</p>
                  <p class="periodo-educacao">2016 - 2021</p>
                </div>
              </div>
            </section>
          </div>
            `
      break;
    case 'projetos':
      conteudo.innerHTML = `
            <h1>Projetos</h1>
          <div class="conteudo grid">
          <div onclick="projeto_popUp('kosManager')" class="projetos-container sombra-container kos-manager">
              <img src="img/kos-manager-1.PNG" alt="" class="img-projeto" alt="imagem do projeto"/>
              <h5 class="titulo">Kos Manager (TCC)</h5>
            </div>

            <div onclick="projeto_popUp('chiquito')" class="projetos-container sombra-container chiquito">
              <img src="img/chiquito-1.PNG" alt="" class="img-projeto" alt="imagem do projeto"/>
              <h5 class="titulo">Chiquito aventuras</h5>
            </div>

            <div onclick="projeto_popUp('gameStore')" class="projetos-container sombra-container game-store">
              <img src="img/game-store-2.PNG" alt="" class="img-projeto" alt="imagem do projeto"/>
              <h5 class="titulo">Game Store</h5>
            </div>

            <div onclick="projeto_popUp('vinheria')" class="projetos-container sombra-container vinheria">
              <img src="img/vinheria-1.PNG" alt="" class="img-projeto" alt="imagem do projeto"/>
              <h5 class="titulo">Vinheria Agnello</h5>
            </div>
          </div>
            `
      break;
    default:
      break;
  }

}

// FUNÇÃO COPIAR E COLAR E-MAIL
var emailElement = document.querySelector('.email');
emailElement.addEventListener('click', function () {
  var input = document.createElement('input');
  input.setAttribute('value', emailElement.textContent);
  document.body.appendChild(input);

  input.select();
  document.execCommand('copy');

  document.body.removeChild(input);

  alerta_hidden.classList.remove('hidden')
  button.addEventListener('click', function () {
    alerta_hidden.classList.add('hidden')
  })
});

// FUNÇÃO PARA INSERIR DADOS DE CADA PROJETO NO POP-UP
function projeto_popUp(nomePjt) {
  projeto_hidden.classList.remove("hidden");
  fechar_btn.addEventListener("click", function () {
    projeto_hidden.classList.add("hidden");
  });
  switch (nomePjt) {
    case 'vinheria':
      titulo_pjt.textContent = `projeto vinheria agnello`
      img_pjt.setAttribute('src', `img/vinheria-1.PNG`)
      tecnologias_pjt.innerHTML = ` <strong class="tecnologias-titulo">TECNOLOGIAS UTILIZADAS:&nbsp;</strong> HTML, CSS`
      link_pjt.innerHTML = `<strong class="tecnologias-titulo">LINK REPOSITÓRIO:&nbsp;</strong> <a id="link_href" href="https://github.com/medeirossteffany/vinheriaAngello" target="_blank"> /vinheriaAngello </a>`
      textoDesc_pjt.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Esse projeto foi desenvolvido para um trabalho de Front-end no meu 1° semestre de faculdade, com o intuito de criar um e-commerce para a tradicional Vinheria Agnello sem perder a essência das visitas à vinheria.`
      break;

    case 'gameStore':
      titulo_pjt.textContent = `Game Store`
      img_pjt.setAttribute('src', `img/game-store-1.PNG`)
      tecnologias_pjt.innerHTML = ` <strong class="tecnologias-titulo">TECNOLOGIAS UTILIZADAS:&nbsp;</strong> HTML, CSS`
      link_pjt.innerHTML = `<strong class="tecnologias-titulo">LINK REPOSITÓRIO:&nbsp;</strong> <a id="link_href" href="https://github.com/MilenaGarciaCosta/Game-Store" target="_blank"> /Game-Store </a>`
      textoDesc_pjt.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Esse projeto foi desenvolvido para um trabalho de Front-end no meu 1° semestre de faculdade, com o intuito de criar uma loja online de artigos de tecnologia. Um projeto simples que mostra o poder do CSS!`
      break;

    case 'chiquito':
      titulo_pjt.textContent = `Chiquito aventuras`
      img_pjt.setAttribute('src', `img/chiquito-1.PNG`)
      tecnologias_pjt.innerHTML = ` <strong class="tecnologias-titulo">TECNOLOGIAS UTILIZADAS:&nbsp;</strong> HTML, CSS, JavaScript`
      link_pjt.innerHTML = `<strong class="tecnologias-titulo">LINK REPOSITÓRIO:&nbsp;</strong> <a id="link_href" href="https://github.com/MilenaGarciaCosta/Chiquito-aventuras" target="_blank"> /Chiquito-aventuras </a>`
      textoDesc_pjt.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jogo desenvolvido para a aula de espanhol. O jogo funciona com questões alternativas onde o aluno deve selecionar a alternativa que preenche corretamente a frase conjugada no indicativo pretérito perfeito composto. No final, o aluno consegue ver quantas questões acertou no total e jogar novamente.`
      break;

    case 'kosManager':
      titulo_pjt.textContent = `Kos Manager (TCC)`
      img_pjt.setAttribute('src', `img/kos-manager-1.PNG`)
      tecnologias_pjt.innerHTML = ` <strong class="tecnologias-titulo">TECNOLOGIAS UTILIZADAS:&nbsp;</strong> C#, .NET, MySql, Scrum`
      link_pjt.innerHTML = `<strong class="tecnologias-titulo">LINK REPOSITÓRIO:&nbsp;</strong> <a id="link_href" href="https://github.com/MilenaGarciaCosta/Kos-Manager" target="_blank"> /Kos-Manager </a>`
      textoDesc_pjt.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este é meu trabalho de conclusão de curso da Etec. A proposta do projeto é ser uma ferramenta desktop com objetivo de auxiliar o gerenciamento de pequenas e médias empresas que trabalham com produtos perecíveis. O aplicativo conta com diversos módulos de gerenciamento e um dashboard atualizado em tempo real.`
      break;

    default:
      break;
  }
}