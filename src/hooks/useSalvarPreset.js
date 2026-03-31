import { useContext } from "react";

// Contextos
import { EstadoContext } from "../context/EstadoContext"
import { PresetContext } from "../context/PresetContext"

// Lógica
import modalController from "./modalController";
import notificacao from "./notificacao";
import gerarCodigo from "./gerarCodigo";



function useSalvarPreset() {
    // Contextos
    const { setPreset } = useContext(PresetContext)
    const { estado } = useContext(EstadoContext)

    // Retorna a função fecharModal
    const { fecharModal } = modalController()

    const { gerarNotificacao } = notificacao()

    const codigoGerado = gerarCodigo(estado)
    
    
    let novosPresets


    function salvar(inputRef, dialogRef) {
        const nomePreset = inputRef.current.value.trim()
        
        if (!nomePreset) return

        
        // Atualiza estado
        setPreset((preset) => {
            novosPresets = [
                ...preset,

                {
                    nomePreset: nomePreset,
                    titulo: estado.titulo,
                    descricao: estado.descricao,
                    espacamento: estado.espacamento,
                    corFundo: estado.corFundo,
                    corTexto: estado.corTexto,
                    borda: estado.borda,
                    raioBorda: estado.raioBorda,
                    tamanhoFonte: estado.tamanhoFonte,
                    pesoFonte: estado.pesoFonte,
                    id: crypto.randomUUID(),
                    codigoGerado: codigoGerado
                }
            ]

            localStorage.setItem("presets", JSON.stringify(novosPresets))

            return novosPresets
        })

        fecharModal(dialogRef, inputRef)

        const mensagem = "Preset adicionado"

        gerarNotificacao(mensagem)
    }

    return{
        salvar
    }
}

export default useSalvarPreset