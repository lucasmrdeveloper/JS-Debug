import { useContext } from "react"
import { EstadoContext } from "../context/EstadoContext"

export const useAtualizarEstado = (e) => {
    const { setEstado } = useContext(EstadoContext)
    
    return (e) => {
        const { id, value } = e.target
        const campo = id

        setEstado(anterior => ({
            ...anterior,
            [campo]: value
        })) 
    }
}