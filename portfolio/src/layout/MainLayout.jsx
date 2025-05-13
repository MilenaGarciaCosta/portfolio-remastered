import { Outlet } from "react-router-dom";
import "../styles/main.css"

import Nav from "../components/Nav.jsx"
import Sidebar from "../components/Sidebar.jsx"

const MainLayout =()=> {
    return(
        <main id="main_layout">
            <section id=" navbar">
                <Nav/>
            </section>
            
            <section id="sidebar">
                <Sidebar/>
            </section>

            <section id="conteudo_container">
                <Outlet/> {/* Conteúdo dinâmico */}
            </section>
        </main>
    )
}

export default MainLayout