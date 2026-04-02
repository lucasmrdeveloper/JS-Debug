// Hook
import { useContext } from "react";

// Contextos
import { EstadoContext } from "../context/EstadoContext"
import { PresetContext } from "../context/PresetContext"

// Lógica
import modalController from "./modalController";
import notificacao from "./notificacao";
import gerarCodigo from "./gerarCodigo";


function salvarPreset() {
    const { estado } = useContext(EstadoContext)
    const { setPreset } = useContext(PresetContext)

    const { fechar } = modalController()
    const { gerarNotificacao } = notificacao()

    const codigoGerado = gerarCodigo(estado)
    

    function salvar(nomePreset) {
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
            return novosPresets
        })

   
        fechar()
        gerarNotificacao("Preset salvo com sucesso!")
    }

    return{
        salvar
    }
}

export default salvarPreset