import { NavLink } from "react-router-dom"

const Nav =()=> {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
    }

    return (
        <nav>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Sobre</NavLink>
            <NavLink to="/habilidades" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Habilidades</NavLink>
            <NavLink to="/educacao" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Educação</NavLink>
            <NavLink to="/projetos" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Projetos</NavLink>
        </nav>
    )
}

export default Nav