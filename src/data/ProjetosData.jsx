import ImagemPj1 from "../assets/projetos-img/kos-manager-1.PNG"
import ImagemPj2 from "../assets/projetos-img/mahindra-racing.png"

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
        descricao: 'Vigil Race é uma solução desenvolvida para a empresa Tech Mahindra no Challenge promovido pela FIAP no ano de 2025. Com esse projeto, aumentamos a visibilidade das corridas da Formula E, consolidando uma comunidade. \nA plataforma conta com um chat em tempo real, um sistema onde o usuário ganha pontos ao compartilhar e interagir de diversas formas com a comunidade. Esses pontos ganhos podem ser trocados por diversos prêmios. \nAlém disso o site conta com um jogo de previsão do ganhador do jogo utilizando dados dos carros e corredores atualizados em tempo real a partir de sensores.',
    },
]

export default ProjetosData