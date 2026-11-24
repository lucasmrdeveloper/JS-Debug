import { useContext } from "react"
import { EstadoContext } from "../../context/EstadoContext"

export function useGerarCodigo() {
    const { estado } = useContext(EstadoContext)

    const { 
        mensagem, 
        corTexto, 
        corFundo, 
        tamanhoFonte, 
        pesoFonte,
        espacamento,
        raioBorda,
        borda,
    } = estado

    const codigoGerado = `console.log(
    "%c${mensagem}",
    "color: ${corTexto};  background-color: ${corFundo};  font-size: ${tamanhoFonte};  font-weight: ${pesoFonte};  padding: ${espacamento};  border-radius: ${raioBorda}; border: ${borda};" \n)`
    
    return codigoGerado
}