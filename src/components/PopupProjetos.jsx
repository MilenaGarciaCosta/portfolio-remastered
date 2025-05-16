import "../styles/popup_projeto.css"
import { Link } from "react-router-dom";

const PopupProjetos = ({ projeto, onClose }) => {
    if (!projeto) return null;

    return (
        <section id="popup_card" className="sombra-container">
            <div id="fechar_popup_container">
                <Link id="fechar_popup_btn" onClick={onClose}> X </Link>
            </div>
            <div id="projeto_container">
                <h1 id="titulo_projeto">{projeto.titulo}</h1>
                <div id="texto_imagem_pj_container">
                    <img src={projeto.imagem} alt="Foto do projeto" className="sombra-container" />
                    <p id="descricao_projeto">
                        {projeto.descricao}
                    </p>
                </div>
                <h4 id="tecnologias_projeto">TECNOLOGIAS UTILIZADAS: {projeto.tecnologias}</h4>
                <Link to={projeto.link} target="_blank" id="link_projeto">LINK DO REPOSITÓRIO</Link>
            </div>
        </section>
    )
}

export default PopupProjetos