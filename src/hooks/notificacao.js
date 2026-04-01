// Hook
import { useContext } from "react"

// Contexto
import { NotificacaoContext } from "../context/NotificacaoContext"


function notificacao() {
    const { setNotificacao } = useContext(NotificacaoContext)

    function gerarNotificacao(mensagem) {
        setNotificacao(mensagem)
        
        setTimeout(() => {
            setNotificacao(null)
        }, 3000)
    }

    return{
        gerarNotificacao
    }
}

export default notificacao