import { NavLink } from "react-router-dom"
import "../styles/nav.css"

const CustomNavLink =({to, children})=>{
    return(
        <NavLink to={to} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>{children}</NavLink>
    )
}

export default CustomNavLink