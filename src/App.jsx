import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";

import SobreMim from "./pages/SobreMim.jsx"
import Habilidades from "./pages/Habilidades.jsx"
import Educacao from "./pages/Educacao.jsx"
import Projetos from "./pages/Projetos.jsx"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<SobreMim/>}/>
        <Route path="/habilidades" element={<Habilidades/>}/>
        <Route path="/educacao" element={<Educacao/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Route>
    </Routes>
  )
}

export default App
