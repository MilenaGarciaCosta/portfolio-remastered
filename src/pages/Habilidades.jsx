import PageWrap from "../layout/PageWrap.jsx";
import "../styles/habilidades.css";

import InglesIcon from "../assets/ingles.png";
import WebDev from "../assets/web-dev.png";
import Branch from "../assets/branch.png";
import Scrum from "../assets/scrum.png";
import SqlLogo from "../assets/banco-de-dados.png";
import OutrasTech from "../assets/outras-tech.png";

const Habilidades = () => {
  return (
    <PageWrap id="titulo_habilidades" titulo="Habilidades">
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Gosto de explorar novas tecnologias e estou
        sempre estudando para evoluir como desenvolvedora. Aqui estão algumas
        das habilidades que venho aprimorando ao longo da minha jornada.
      </p>
      <section id="habilidades_container">
        <div className="card_habilidade escuro">
          <div className="titulo_card_habilidade">
            <img src={InglesIcon} alt="icone habilidade" />
            <h4>Inglês como segunda língua</h4>
          </div>
          <p>
            Inglês avançado como segunda língua, permitindo leitura, escrita e
            comunicação técnica.
          </p>
        </div>

        <div className="card_habilidade claro">
          <div className="titulo_card_habilidade">
            <img src={WebDev} alt="icone habilidade" />
            <h4>Linguagens de programação</h4>
          </div>
          <p>JavaScript, Python, SQL, C#, HTML/CSS.</p>
        </div>

        <div className="card_habilidade escuro">
          <div className="titulo_card_habilidade">
            <img src={OutrasTech} alt="icone habilidade" />
            <h4>Frameworks e bibliotecas</h4>
          </div>
          <p>
            React.js, Node.js, Tailwind, Bootstrap, Django, Selenium.
          </p>
        </div>

        <div className="card_habilidade grid claro">
          <div className="titulo_card_habilidade">
            <img src={Scrum} alt="icone habilidade" />
            <h4>Metodologias ágeis</h4>
          </div>
          <p>
            Familiaridade com Scrum e Kanban, aplicada em projetos acadêmicos.
          </p>
        </div>

        <div className="card_habilidade grid escuro">
          <div className="titulo_card_habilidade">
            <img src={SqlLogo} alt="icone habilidade" />
            <h4>Banco de Dados</h4>
          </div>
          <p>
            Conhecimento em bancos relacionais e prática com SQL em projetos
            integrados.
          </p>
        </div>

        <div className="card_habilidade grid claro">
          <div className="titulo_card_habilidade">
            <img src={Branch} alt="icone habilidade" />
            <h4>Versionamento de projetos</h4>
          </div>
          <p>
            Utilizo Git e GitHub nos meus projetos, mantendo o controle de
            versões.
          </p>
        </div>
      </section>
    </PageWrap>
  );
};

export default Habilidades;
