import { useHandlePreset } from "../hook/useHandlePreset"

const ItemPreset = ({ tipo, descricao, mensagem, cor }) => {
    const handlePreset = useHandlePreset()

    return (
        <button
            type="button"
            className="preset-item"
            style={{ backgroundColor: cor }} 
            onClick={() => handlePreset(mensagem, cor)}
        >
            <h2 className="preset-titulo">{tipo}</h2>
            <p className="preset-descricao">{descricao}</p>
        </button>
    )
}

export default ItemPreset