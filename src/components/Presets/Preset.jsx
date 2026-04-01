// Lógica
import handlePreset from "../../hooks/handlePreset"


function Preset( { preset, descricao, data} ) {
    const { identificarClicado } = handlePreset()

    const cores = {
        sucesso: "#16A34A",
        erro: "#DC2626",
        aviso: "#EAB307"
    }
    
    return(
        <>      
            <div style={{ backgroundColor: cores[data] }} className="preset-item" onClick={identificarClicado} data-preset={data}>
                <h2 className="preset-titulo">{preset}</h2>
                <p className="preset-descricao">{descricao}</p>
            </div>
        </>
    )
}

export default Preset