import "../styles/layout/notificacao.css"

function Notificacao( {texto} ) {
    console.log("===== Notificação=====")

    return(
        <>
            <div className="notificacao-box">
                <p>{texto}</p>
            </div>
        </>
    )
}

export default Notificacao