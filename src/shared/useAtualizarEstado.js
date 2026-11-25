import { useContext } from "react"
import { EstadoContext } from "../context/EstadoContext"

export const useAtualizarEstado = () => {
    const { setEstado } = useContext(EstadoContext)
    
    return (e) => {
        const campo = e.target.id
        const valor =  e.target.value

        setEstado(anterior => ({
            ...anterior,
            [campo]: valor
        })) 
    }
}