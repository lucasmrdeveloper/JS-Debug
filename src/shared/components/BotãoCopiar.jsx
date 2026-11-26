import { useHandleCopiar } from "../hooks/useHandleCopiar"

const BotaoCopiar = () => {
    const { handleCopiar, copiado } = useHandleCopiar()

    return (
        <button 
            className="codigo__botao-copiar" 
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