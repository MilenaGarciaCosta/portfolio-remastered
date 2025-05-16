import PageWrap from "../layout/PageWrap.jsx"
import "../styles/popup_projeto.css"
import { useState } from "react"
import ProjetosData from "../data/ProjetosData.jsx"
import PopupProjetos from "../components/PopupProjetos.jsx"

const Projetos = () => {
    const [projetoSelecionado, setprojetoSelecionado] = useState(null);

    const handleAbrirPopup = (ProjetosData) => {
        setprojetoSelecionado(ProjetosData);
    };

    const handleFecharPopup = () => {
        setprojetoSelecionado(null);
    };

    return (
        <PageWrap id="titulo_projetos" titulo="Projetos">
            <div id="projetos_mapeados_container">
                {ProjetosData.map((projeto) => (
                    <div
                        key={projeto.id}
                        onClick={() => handleAbrirPopup(projeto)}
                        className="projeto_item"
                    >
                        <h2 className="projeto_titulo">{projeto.titulo}</h2>
                    </div>
                ))}
            </div>

            <section id="popup_projeto">
                {projetoSelecionado && (
                    <PopupProjetos project={projetoSelecionado} onClose={handleFecharPopup} />
                )}
            </section>
        </PageWrap>
    )
}

export default Projetos