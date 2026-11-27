import { useState } from "react"
import { copiarCodigo } from "../utils/copiarCodigo"

export const useHandleCopiar = () => {
    const [copiado, setCopiado] = useState(false)
    const [erro, setErro] = useState(false)

    const handleCopiar = async (codigoGerado) => {
        setCopiado(false)
        setErro(false)
        
        try {
            await copiarCodigo(codigoGerado)
            setCopiado(true)
    
            setTimeout(() => setCopiado(false), 3000)
        } catch (erro) {
            setErro(true)

            setTimeout(() => setErro(false), 3000)
        }
    }
    
    return { handleCopiar, copiado, erro }
}