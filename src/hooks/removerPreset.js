import { useContext } from "react"
import notificacao from "./notificacao";

function removerPreset() {
    const { gerarNotificacao } = notificacao()
    
    function remover(item, setPreset){
        const id = item.id

        console.log("id", id)
        
        setPreset((prev) => prev.filter(item => item.id !== id))

        const mensagem = "Excluido Preset"
        gerarNotificacao(mensagem)   
    }

    return {
        remover
    }
}

export default removerPreset