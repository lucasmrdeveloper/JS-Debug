import { useContext } from "react"
import { EstadoContext } from "../../context/EstadoContext"

export const useFormatarDadosPreview = (item) => {
    const { estado } = useContext(EstadoContext)
    const dados = item ?? estado

    if (!dados) return null

    return {
        mensagem: dados.mensagem,

        styles : {
            conteudo: {
                padding: dados.espacamento,
                backgroundColor: dados.corFundo,
                borderRadius: dados.raioBorda,
                border: dados.borda
            },

            texto: {
                color: dados.corTexto,
                fontSize: dados.tamanhoFonte,
                fontWeight: dados.pesoFonte
            }
        }
    }
}