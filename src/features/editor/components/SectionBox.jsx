function SectionBox({ titulo, children }) {
    return(
        <div className="personalizar-box">
            <h2 className="personalizar-titulo">{titulo}</h2>

            <div className="personalizar-itens">
                {children}
            </div>
        </div>
    )
}

export default SectionBox
