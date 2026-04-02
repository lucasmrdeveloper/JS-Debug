import notificacao from "./notificacao";

function removerPreset() {
    const { gerarNotificacao } = notificacao()
    
    function remover(item, setPreset){
        const id = item.id
        
        setPreset((prev) => {
            const novaLista = prev.filter(item => item.id !== id)

            localStorage.setItem("presets", JSON.stringify(novaLista))

            return novaLista
        })

        gerarNotificacao("Preset removido!")   
    }

    return {
        remover
    }
}

export default removerPreset