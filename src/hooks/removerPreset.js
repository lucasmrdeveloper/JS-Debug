import { useContext } from "react"
import notificacao from "./notificacao";

function removerPreset() {
    const { gerarNotificacao } = notificacao()
    
    function remover(item, setPreset){
        const id = item.id
        
        setPreset((prev) => prev.filter(item => item.id !== id))

        gerarNotificacao("Preset excluído")   
    }

    return {
        remover
    }
}

export default removerPreset