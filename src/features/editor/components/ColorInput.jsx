import { useAtualizarEstado } from "../../../shared/useAtualizarEstado"

const ColorInput = ({ label, id, value }) => {
    const handleChange = useAtualizarEstado()

    return (
        <div className="personalizar-item">
            <label htmlFor={id}>{label}</label>
            
            <div className="personalizar-cores-box">
                <input 
                    type="color"  
                    value={value}
                    onChange={(e) => handleChange(e)}
                />
                
                <input 
                    type="text" 
                    id={id}
                    value={value} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    )
}

export default ColorInput