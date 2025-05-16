import "../styles/sidebar.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { copiarEmail } from "../scripts/sidebar.js"

import FotoPerfil from "../assets/foto-perfil.png"
import DowloadIcon from "../assets/instalar.png"

const Sidebar =()=> {
    useEffect(() =>{
        copiarEmail()
    }, [])

    return(
        <aside id="section_container" className="sombra-container altura">
            <img id="foto_perfil" alt="Foto de perfil" src={FotoPerfil} />
            <div className="ajuste_altura_aside">            
                <h2>Milena Garcia</h2>
                <h3 id="role_name">Engenheira de Software</h3>

                <div id="informacoes_container">
                    <div>
                        <h4 className="titulo_informacao">E-mail</h4>
                        <Link className="link_informacao" id="email">milenagarcia.dev@gmail.com</Link>
                    </div>
                    
                    <div>
                        <h4 className="titulo_informacao">Github</h4>
                        <Link to="https://github.com/MilenaGarciaCosta" target="_blank" className="link_informacao">/MilenaGarciaCosta</Link>
                    </div> 
                    
                    <div>
                        <h4 className="titulo_informacao">Linkedin</h4>
                        <Link to="https://www.linkedin.com/in/milena-garcia-605931256/" target="_blank" className="link_informacao">milena-garcia-605931256/</Link>
                    </div>

                    <div>
                        <div id="curriculo_container">
                            <h4 className="titulo_informacao" id="curriculo_titulo">Currículo</h4>
                            <img src={DowloadIcon} alt="Instalar currículo" /> 
                        </div>
                        <a className="link_informacao" href="/Milena_Garcia-curriculo.pdf"download id="curriculo_link" rel="noopener noreferrer">Clique para instalar</a>
                    </div>
                </div>
            </div>
            
            <section id="alerta_hidden" className="alerta_hidden blur-container hidden">
                <div id="alerta_conteudo" className="sombra-container">
                    <p>Enviado para a área de transferência</p>
                    <button id="fechar_alerta">Fechar</button>
                </div>
            </section>
        </aside>
    )
}

export default Sidebar