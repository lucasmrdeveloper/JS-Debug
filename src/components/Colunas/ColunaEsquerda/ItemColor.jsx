// Lógica
import atualizarEstado from "../../../hooks/atualizarEstado"


function itemColor( {label, id, value, data, estado, setEstado} ) {
    
    return(
        <div className="personalizar-item">
            <label htmlFor={id}>{label}</label>
            
            <div className="personalizar-cores-box">
                <input 
                    type="color" 
                    id={id} 
                    value={value}
                    data-input={data} 
                    onChange={(e) => atualizarEstado(e, estado, setEstado)}
                />
                
                <input 
                    type="text" 
                    value={value} 
                    data-input={data} 
                    onChange={(e) => atualizarEstado(e, estado, setEstado)}
                />
            </div>
        </div>
    )
}

export default itemColor