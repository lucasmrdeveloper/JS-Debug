// Hook
import { useContext } from "react"

// Contexto
import { EstadoContext } from "../context/EstadoContext"


function handlePreset() {
    const { setEstado } = useContext(EstadoContext)

    function identificarClicado(e) {
        const preset = e.currentTarget.dataset.preset

        validarPreset(preset)
    }   

    function validarPreset(preset) {
        if (preset === "sucesso") {
            setEstado((estado) => ({
                ...estado,
                
                titulo: "Sucesso",
                descricao: "Código Rodou",
                corTexto: "#FFFFFF",
                corFundo: "#16A34A"
            }))
        }

        if (preset === "erro") {
            setEstado((estado) => ({
                ...estado,

                titulo: "Erro",
                descricao: "Código Não Rodou",
                corTexto: "#FFFFFF",
                corFundo:  "#DC2626"
            }))
        }

        if (preset === "aviso") {
            setEstado((estado) => ({
                ...estado,

                titulo: "Aviso",
                descricao: "Mensagem de Aviso",
                corTexto: "#000000",
                corFundo:  "#EAB307"
            }))
        }
    }

    return{
        identificarClicado
    }
}

export default handlePreset