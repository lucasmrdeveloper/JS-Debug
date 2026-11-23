import { useContext } from "react"
import { EstadoContext } from "../../../context/EstadoContext"

export const useHandlePreset = () => {
    const { setEstado } = useContext(EstadoContext)

    return (mensagem, cor) => {
        setEstado(anterior => ({
            ...anterior,
            mensagem: mensagem,
            corFundo: cor
        }))
    }
}

export default useHandlePreset