import { useContext } from "react";

// Contextos
import { EstadoContext } from "../context/EstadoContext"
import { NomePresetContext } from "../context/NomePresetContext"

// Lógica
import modalController from "./modalController";
import notificacao from "./notificacao";



function useSalvarPreset() {
    // Contextos
    const { setPreset } = useContext(NomePresetContext)
    const { estado } = useContext(EstadoContext)

    // Retorna a função fecharModal
    const { fecharModal } = modalController()

    const { gerarNotificacao } = notificacao()
    
    
    let novosPresets


    function salvar(inputRef, dialogRef) {
        // Nome e código Gerado
        const nomePreset = inputRef.current.value 
        const codigoGerado = `console.log(
        "%c ${estado.titulo} ${estado.descricao}",
        "color: ${estado.corTexto};  background-color: ${estado.corFundo};  font-size: ${estado.tamanhoFonte};  font-weight: ${estado.pesoFonte};  padding: ${estado.espacamento};  border-radius: ${estado.raioBorda}; border: ${estado.borda};" \n)`

        
        // Valida se está vazio
        if (nomePreset.trim() === ""){
             return
        } 


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