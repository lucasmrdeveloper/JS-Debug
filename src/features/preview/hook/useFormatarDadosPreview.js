import { useContext } from "react"
import { EstadoContext } from "../../../context/EstadoContext"

const useFormatarDadosPreview = () => {
    const { estado } = useContext(EstadoContext)

    if (estado) {
        return {
            mensagem: estado.mensagem,
            id: estado.id,

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

export default useFormatarDadosPreview