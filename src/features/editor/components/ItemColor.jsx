// Lógica
import atualizarEstado from "../../../hooks/atualizarEstado"


function itemColor( {label, id, value, data, setEstado} ) {
    
    return(
        <div className="personalizar-item">
            <label htmlFor={id}>{label}</label>
            
            <div className="personalizar-cores-box">
                <input 
                    type="color" 
                    id={id} 
                    value={value}
                    data-input={data} 
                    onChange={(e) => atualizarEstado(e, setEstado)}
                />
                
                <input 
                    type="text" 
                    value={value} 
                    data-input={data} 
                    onChange={(e) => atualizarEstado(e, setEstado)}
                />
            </div>
        </div>
    )
}

export default itemColor