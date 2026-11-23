import useHandlePreset from "../hook/useHandlePreset"

const ItemPreset = ({ tipo, descricao, mensagem, cor }) => {
    const handlePreset = useHandlePreset()

    return (
        <div
            style={{ backgroundColor: cor }} 
            className="preset-item"
            onClick={() => handlePreset(mensagem, cor)}
        >
            <h2 className="preset-titulo">{tipo}</h2>
            <p className="preset-descricao">{descricao}</p>
        </div>
    )
}

export default ItemPreset