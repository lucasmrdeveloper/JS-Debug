// Lógica
import atualizarEstado from "../../../hooks/atualizarEstado"


function ItemInput( {label, id, value, data, estado, setEstado} ) {
    return(
        <>
            <div className="personalizar-item" style={{width: id === "espacamento" ? "100%" : "auto"}}>
                <label htmlFor={id}>{label}</label>
                
                <input 
                    type="text"
                    id={id}
                    value={value}
                    data-input={data}
                    onChange={(e) => atualizarEstado(e, estado, setEstado)}
                />
            </div>
        </>
    )
}

export default ItemInput