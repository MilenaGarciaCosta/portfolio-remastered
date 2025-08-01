import PageWrap from "../layout/PageWrap.jsx"
import "../styles/educacao.css"

const Educacao =()=>{
    return(
        <PageWrap id="titulo_educacao" titulo="Educação">
            <section id="educacao_container">
                <div className="educacao_card">
                    <h3>Etec Ermelinda</h3>
                    <p>Curso técnico de Desenvolvimento de Sistemas</p>
                    <p>2021 - 2023</p>
                </div>

                <div className="educacao_card">
                <h3>FIAP</h3>
                    <p>Bacharelado em Engenharia de Software</p>
                    <p>2024 - 2027</p>
                </div>

                <div className="educacao_card">
                <h3>Excellent Global</h3>
                    <p>Curso de inglês (A1 ao C2)</p>
                    <p>2016 - 2021</p>
                </div>

                <div className="educacao_card">
                <h3>AWS Educate</h3>
                    <p>Getting Started with Compute</p>
                    <p>Agosto 2025</p>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f53d7ed8-3f9d-407f-a31e-cc028e774958" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                </div>
            </section>
        </PageWrap>
    )
}

export default Educacao