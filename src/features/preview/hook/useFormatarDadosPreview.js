import { useContext } from "react"
import { EstadoContext } from "../../../context/EstadoContext"

export const useFormatarDadosPreview = () => {
    const { estado } = useContext(EstadoContext)

    if (estado) {
        return {
            mensagem: estado.mensagem,

            styles : {
                conteudo: {
                    padding: estado.espacamento,
                    backgroundColor: estado.corFundo,
                    borderRadius: estado.raioBorda,
                    border: estado.borda
                },
    
                texto: {
                    color: estado.corTexto,
                    fontSize: estado.tamanhoFonte,
                    fontWeight: estado.pesoFonte
                }
            }
        }
    }
}