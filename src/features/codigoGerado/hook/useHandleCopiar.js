import { useState } from "react";
import { copiarCodigo } from "../../../shared/utils/copiarCodigo"

export const useHandleCopiar = () => {
    const [copiado, setCopiado] = useState(false)

    async function handleCopiar(codigoGerado) {
        setCopiado(false)
        
        try {
            await copiarCodigo(codigoGerado)
            setCopiado(true)
    
            setTimeout(() => setCopiado(false), 3000)
        } catch (erro) {
            console.error("Não foi possível copiar:", erro)
            return false
        }
    }
    
    return { handleCopiar, copiado }
}