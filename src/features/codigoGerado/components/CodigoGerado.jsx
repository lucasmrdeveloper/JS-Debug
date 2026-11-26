import { useGerarCodigo } from "../../../shared/hooks/useGerarCodigo"
import { useHandleCopiar } from "../../../shared/hooks/useHandleCopiar"

import BotaoCopiar from "../../../shared/components/BotãoCopiar"

import "../styles/CodigoGerado.css"

const CodigoGerado = () => {
    const codigo = useGerarCodigo()
    const { handleCopiar, copiado, erro } = useHandleCopiar()

    return (
        <div className="codigo">
            <h2>Código Gerado</h2>
            <p>Copie este trecho e cole no seu código Javascript.</p>

            <div className="codigo__painel">
                <button 
                    className="codigo__botao-copiar" 
                    onClick={() => handleCopiar(codigo)}
                >
                    <img 
                        src="/copiar.svg" 
                        alt="ícone de copiar código" 
                    />

                    <BotaoCopiar copiado={copiado}/>
                </button>

                <code className="codigo__gerado">
                    {codigo}
                </code>
                
                {erro && (
                    <p className="codigo__erro"> 
                        Não foi possível copiar. Selecione o código e copie manualmente.
                    </p> 
                )}
            </div>
        </div>
    )
}

export default CodigoGerado

