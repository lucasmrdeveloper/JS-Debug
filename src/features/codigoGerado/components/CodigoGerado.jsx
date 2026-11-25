import { useGerarCodigo } from "../../../shared/hooks/useGerarCodigo"
import { useHandleCopiar } from "../hook/useHandleCopiar"

import "./CodigoGerado.css"

const CodigoGerado = () => {
    const codigo = useGerarCodigo()
    const { handleCopiar, copiado, erro } = useHandleCopiar()

    return (
        <div className="codigo">
            <h2 className="codigo-titulo">Código Gerado</h2>
            <p className="codigo-texto">Copie este trecho e cole no seu código Javascript.</p>

            <div className="codigo-box">
                <button 
                    className="codigo-copiar" 
                    onClick={() => handleCopiar(codigo)}
                >
                    <img 
                        className="codigo-copiar-img" 
                        src="/copiar.svg" 
                        alt="ícone de copiar código" 
                    />

                    <span className="codigo-copiar-texto"> 
                        {copiado ? "Copiado!" : "Copiar"} 
                    </span>
                </button>

                {erro && (
                    <p className="codigo-copiar-texto"> 
                        Não foi possível copiar. Selecione o código e copie manualmente.
                    </p> 
                )}

                <code className="codigo-gerado">
                    {codigo}
                </code>
            </div>
        </div>
    )
}

export default CodigoGerado

