import { NavLink } from "react-router-dom"
import "../styles/nav.css"

import CustomNavLink from "./CustomNavLink.jsx"

const Nav =()=> {
    return (
        <section id="nav_container">
            <nav className="sombra-container">
                <CustomNavLink to="/">Sobre</CustomNavLink>
                <CustomNavLink to="/habilidades">Habilidades</CustomNavLink>
                <CustomNavLink to="/educacao">Educação</CustomNavLink>
                <CustomNavLink to="/projetos">Projetos</CustomNavLink>
            </nav>
        </section>
    )
}

export default Nav