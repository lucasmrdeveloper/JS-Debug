import { useHandleCopiar } from "../hooks/useHandleCopiar"

import "../styles/BotaoCopiar.css"

const BotaoCopiar = () => {
    const { handleCopiar, copiado } = useHandleCopiar()

    return (
        <button 
            className="botao__copiar" 
            onClick={() => handleCopiar(codigo)}
        >
            <img 
                src="/copiar.svg" 
                alt="ícone de copiar código" 
            />

            <span>{copiado ? "Copiado!" : "Copiar"}</span>
        </button>
    )
}

export default BotaoCopiar