import { useContext } from "react"
import { EstadoContext } from "../../../context/EstadoContext"

export const useFormatarDadosPreview = () => {
    const { estado } = useContext(EstadoContext)
    console.log("estado", estado)

    if (estado) {
        return {
            mensagem: estado.mensagem,

            box: {
                padding: estado.espacamento,
                backgroundColor: estado.corFundo,
                borderRadius: estado.raioBorda,
                border: estado.borda
            },

            textos: {
                color: estado.corTexto,
                fontSize: estado.tamanhoFonte,
                fontWeight: estado.pesoFonte
            }
        }
    }
}