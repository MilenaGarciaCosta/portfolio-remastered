import "../styles/conteudo.css"

const PageWrap = ({ titulo, children }) => {
    return (
        <>
            <h1 id="titulo_conteudo" className="titulo_conteudo">{titulo}</h1>
            <div className="conteudo_container">
                {children}
            </div>
        </>
    )
}

export default PageWrap