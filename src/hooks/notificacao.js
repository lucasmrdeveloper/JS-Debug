import { useContext } from "react"
import { NotificacaoContext } from "../context/NotificacaoContext"


function notificacao() {
    const { notificacao, setNotificacao } = useContext(NotificacaoContext)

    function gerarNotificacao(mensagem) {
        console.log("mensagem", mensagem)

        
        setNotificacao(mensagem)
        
        setTimeout(() => {
            setNotificacao(null)
        }, 3000)
            
        console.log("notificacao context", notificacao)
    }

    return{
        gerarNotificacao
    }
}

export default notificacao