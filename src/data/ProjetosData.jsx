import ImagemPj1 from "../assets/projetos-img/kos-manager-1.PNG"
import ImagemPj2 from "../assets/projetos-img/mahindra-racing.png"
import ImagemPj3 from "../assets/projetos-img/jogo-advinha.png"
import ImagemPj4 from "../assets/projetos-img/webscraping-mnsg.png"

const ProjetosData =[
    {
        id: 1,
        titulo: 'Kos Manager',
        imagem: ImagemPj1,
        tecnologias: 'C#, SQL, .NET',
        link: 'https://github.com/MilenaGarciaCosta/Kos-Manager',
        descricao: 'Kos Manager é meu trabalho de conclusão de curso da Etec. A proposta do projeto é ser uma ferramenta ERP desktop com objetivo de auxiliar o gerenciamento de pequenas e médias empresas que trabalham com produtos perecíveis. O aplicativo conta com diversos módulos de gerenciamento e um dashboard atualizado em tempo real.',
    },
    {
        id: 2,
        titulo: 'Vigil Race - Formula E',
        imagem: ImagemPj2,
        tecnologias: 'React, JavaScript, Node.js, SQL',
        link: 'https://github.com/MilenaGarciaCosta/mahindra-racing-ch',
        descricao: 'Vigil Race é uma solução desenvolvida para a empresa Tech Mahindra no Challenge promovido pela FIAP em 2025. A proposta do projeto é aumentar a visibilidade das corridas da Formula E consolidando uma comunidade. A plataforma conta com um chat e um sistema onde o usuário ganha pontos ao compartilhar e interagir com a comunidade, podendo serem trocados por diversos prêmios. Com esse projeto, meu grupo ficou entre os 6 selecionados (de 93 grupos) para expor nosso projeto no evento Next promovido também pela FIAP!',
    },
    {
        id: 3,
        titulo: 'Jogo de advinhação por voz',
        imagem: ImagemPj3,
        tecnologias: 'JavaScript, HTML, CSS, ',
        link: 'https://github.com/MilenaGarciaCosta/Validacao-de-voz',
        descricao: 'Um jogo web onde o usuário deve advinhar um número gerado randomicamente. A função Math.random() retorna um número pseudo-aleatório e o usuário deve adivinhar qual número foi gerado (entre 0 e 100). Conforme seus chutes, é exibido na tela se o chute feito é maior ou menor que o número secreto. O usuário também tem a opção de desistir para jogar novamente ao falar "Fim de jogo". O reconhecimento de voz do jogo é feito a partir da interface SpeechRecognition da Web Speech API.'
        },
        {
        id: 4,
        titulo: 'Webscraping de mensagens',
        imagem: ImagemPj4,
        tecnologias: 'Python, Selenium',
        link: 'https://github.com/MilenaGarciaCosta/capturing-whatsApp-messages',
        descricao: 'Projeto feito para monitorar mensagens de um grupo de conversa. Ao notar um padrão estabelecido no código, a mensagem é tratada e as informações relevantes são armazenadas em variáveis.'
        },

    /* Se for adicionar mais de 6 projetos, atualizar o grid layout no css popup_projeto */
]

export default ProjetosData