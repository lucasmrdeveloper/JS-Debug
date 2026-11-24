import { copiarCodigo } from "../../../shared/utils/copiarCodigo"

export const useHandleCopiar = () => {
    return async (codigoGerado) => {
        try {
            await copiarCodigo(codigoGerado)
            setCopiado(true)

            setTimeout(() => setCopiado(false), 3000)
        } catch (erro) {
            console.error("Não foi possível copiar:", erro)
            return false
        }
    }
}