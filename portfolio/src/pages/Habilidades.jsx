import PageWrap from "../layout/PageWrap.jsx"
import "../styles/habilidades.css"

import InglesIcon from "../assets/ingles.png"
import WebDev from "../assets/web-dev.png"
import Branch from "../assets/branch.png"
import Scrum from "../assets/scrum.png"

const Habilidades = () => {
    return (
        <PageWrap id="titulo_habilidades" titulo="Habilidades">
            <p>&nbsp;&nbsp;&nbsp;&nbsp; Gosto de explorar diversas vertentes. Aqui apresento minhas habilidades principais.</p>
            <section id="habilidades_container">
                <div class="card_habilidade escuro">
                    <div className="titulo_card_habilidade">
                        <img src={InglesIcon} alt="icone habilidade" />
                        <h4>Inglês como segunda língua</h4>
                    </div>
                    <p>Inglês avançado como segunda língua.</p>
                </div>

                <div class="card_habilidade claro">
                <div className="titulo_card_habilidade">
                        <img src={WebDev} alt="icone habilidade" />
                        <h4>Desenvolvimento web</h4>
                    </div>
                    <p>React, JavaScript, Node.js, Tailwind, HTML5, CSS3, Django etc.</p>
                </div>

                <div class="card_habilidade escuro">
                <div className="titulo_card_habilidade">
                        <img src={Branch} alt="icone habilidade" />
                        <h4>Versionamento de projetos</h4>
                    </div>
                    <p>Utilizo Git para manter o versionamento dos meus projetos.</p>
                </div>

                <div class="card_habilidade grid claro">
                <div className="titulo_card_habilidade">
                        <img src={Scrum} alt="icone habilidade" />
                        <h4>Metodologias ágeis</h4>
                    </div>
                    <p></p>
                </div>

                <div class="card_habilidade grid escuro">
                <div className="titulo_card_habilidade">
                        <img src="" alt="icone habilidade" />
                        <h4></h4>
                    </div>
                    <p></p>
                </div>

                <div class="card_habilidade grid claro">
                <div className="titulo_card_habilidade">
                        <img src="" alt="icone habilidade" />
                        <h4></h4>
                    </div>
                    <p></p>
                </div>
            </section>
        </PageWrap>
    )
}

export default Habilidades