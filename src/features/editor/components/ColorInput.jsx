import { useAtualizarEstado } from "../../../shared/useAtualizarEstado"

const ColorInput = ( {label, id, value, data} ) => {
    const handleChange = useAtualizarEstado()

    return(
        <div className="personalizar-item">
            <label htmlFor={id}>{label}</label>
            
            <div className="personalizar-cores-box">
                <input 
                    type="color"  
                    value={value}
                    data-input={data} 
                    onChange={(e) => handleChange(e)}
                />
                
                <input 
                    type="text" 
                    id={id}
                    value={value} 
                    data-input={data} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    )
}

export default ColorInput