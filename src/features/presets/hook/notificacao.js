import { useContext } from "react"

import { NotificacaoContext } from "../../../context/NotificacaoContext"

const notificacao = () => {
    const { setNotificacao } = useContext(NotificacaoContext)

    const gerarNotificacao = (mensagem) => {
        setNotificacao(mensagem)
        
        setTimeout(() => {
            setNotificacao(null)
        }, 3000)
    }

    return gerarNotificacao
}

export default notificacao