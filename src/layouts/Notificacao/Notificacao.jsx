import "./Notificacao.css"

const Notificacao = ({ texto }) => {
    return (
        <div className="notificacao-box">
            <p>{texto}</p>
        </div>
    )
}

export default Notificacao