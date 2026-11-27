import notificacao from "../../../hooks/notificacao";

const useHandleRemoverPreset = () => {
    const { gerarNotificacao } = notificacao()
    
    return (id, setPreset) => {
        setPreset(presetsAtuais => 
            presetsAtuais.filter(preset => preset.id !== id)
        )

        gerarNotificacao("Preset removido!")
    }
}

export default useHandleRemoverPreset