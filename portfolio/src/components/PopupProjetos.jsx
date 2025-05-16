import "../styles/popup_projeto.css"
import { Link } from "react-router-dom";

const PopupProjetos = ({ projeto, onClose }) => {
    if (!projeto) return null;

    return (
        <>
            <div id="fechar_popup_container">
                <button id="fechar_popup_btn" onClick={onClose}> X </button>
            </div>
            <div id="projeto_container">
                <div id="aside_left_projeto">
                    <h1 id="titulo_projeto">{projeto.titulo}</h1>
                    <img src={projeto.imagem} alt="Foto do projeto" />
                    <h4 id="tecnologias_projeto">{projeto.tecnologias}</h4>
                    <Link to={projeto.link} id="link_projeto"></Link>
                </div>

                <div id="aside_right_projeto">
                    <p id="descricao_projeto">
                        {projeto.descricao}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PopupProjetos