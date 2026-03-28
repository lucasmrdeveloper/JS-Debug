// Contexto
import { useContext } from "react"
import { EstadoContext } from "../context/EstadoContext"


function handlePreset() {
    const { setEstado } = useContext(EstadoContext)

    function clicado(e) {
        const preset = e.currentTarget.dataset.preset

        validaPreset(preset)
    }   

    function validaPreset(preset) {

        if (preset === "sucesso") {
            console.log("preset SUCESSO")

            setEstado((estado) => ({
                ...estado,
                
                titulo: "Sucesso",
                descricao: "Código Rodou",
                corTexto: "#FFFFFF",
                corFundo: "#16A34A"
            }))
        }

        if (preset === "erro") {
            console.log("preset ERRO")

            setEstado((estado) => ({
                ...estado,

                titulo: "Erro",
                descricao: "Código Não Rodou",
                corTexto: "#FFFFFF",
                corFundo:  "#DC2626"
            }))
        }

        if (preset === "aviso") {
            console.log("preset AVISO")

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
        clicado
    }
}

export default handlePreset