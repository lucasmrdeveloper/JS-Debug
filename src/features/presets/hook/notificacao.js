import { useContext } from "react"

import { NotificacaoContext } from "../../../context/NotificacaoContext"

const notificacao = () => {
    const { setNotificacao } = useContext(NotificacaoContext)

    return (mensagem) => {
        setNotificacao(mensagem)
        
        setTimeout(() => {
            setNotificacao(null)
        }, 3000)
    }
}

export default notificacao