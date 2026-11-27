import notificacao from "../hook/notificacao"

export const useHandleRemoverPreset = () => {
    const { gerarNotificacao } = notificacao()
    
    return (id, setPreset) => {
        setPreset(presetsAtuais => 
            presetsAtuais.filter(preset => preset.id !== id)
        )

        gerarNotificacao("Preset removido!")
    }
}