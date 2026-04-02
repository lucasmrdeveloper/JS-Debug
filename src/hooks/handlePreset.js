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
                
                mensagem: "Sucesso",
                corTexto: "#FFFFFF",
                corFundo: "#16A34A"
            }))
        }

        if (preset === "erro") {
            setEstado((estado) => ({
                ...estado,

                mensagem: "Erro",
                corTexto: "#FFFFFF",
                corFundo:  "#DC2626"
            }))
        }

        if (preset === "aviso") {
            setEstado((estado) => ({
                ...estado,

                mensagem: "Aviso",
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