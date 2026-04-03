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
                
                mensagem: "Sucesso: Código rodou",
                corTexto: "#FFFFFF",
                corFundo: "#16A34A"
            }))
        }

        if (preset === "erro") {
            setEstado((estado) => ({
                ...estado,

                mensagem: "Erro: Código não rodou",
                corTexto: "#FFFFFF",
                corFundo:  "#DC2626"
            }))
        }

        if (preset === "api") {
            setEstado((estado) => ({
                ...estado,

                mensagem: "Dados da API",
                corTexto: "#fff",
                corFundo:  "#2d799f"
            }))
        }
    }

    return{
        identificarClicado
    }
}

export default handlePreset