import { Outlet } from "react-router-dom";
import "../styles/main.css";

import Nav from "../components/Nav.jsx";
import Sidebar from "../components/Sidebar.jsx";

const MainLayout = () => {
    return (
        <main id="main_container">
            <section id=" navbar">
                <Nav />
            </section>

            <div id="bottom_container">
                <section id="sidebar">
                    <Sidebar />
                </section>

                <section id="conteudo_container" className="sombra-container altura">
                    <Outlet /> {/* Conteúdo dinâmico */}
                </section>
            </div>

        </main>
    )
}

export default MainLayout