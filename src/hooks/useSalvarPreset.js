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
    const { preset, setPreset } = useContext(PresetContext)
    const { estado } = useContext(EstadoContext)

    // Retorna a função fecharModal
    const { fecharModal } = modalController()

    const { gerarNotificacao } = notificacao()

    const codigoGerado = gerarCodigo(estado)
    
    
    function salvar(inputRef, dialogRef) {
        const nomePreset = inputRef.current.value.trim()
        if (!nomePreset) return


        function criarPreset() {
            return{
                nomePreset,
                ...estado,
                id: crypto.randomUUID(),
                codigoGerado: codigoGerado
            }
        }

        function salvarLocalStorage(novosPresets) {
            localStorage.setItem("presets", JSON.stringify(novosPresets))
        }


        setPreset((preset) => {
            const novosPresets = [
                ...preset,
                criarPreset()
            ]

            salvarLocalStorage(novosPresets)
        })

        fecharModal(dialogRef, inputRef)
        gerarNotificacao("Preset adicionado")
    }

    return{
        salvar
    }
}

export default useSalvarPreset