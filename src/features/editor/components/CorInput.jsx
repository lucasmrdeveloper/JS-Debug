import { useAtualizarEstado } from "../hooks/useAtualizarEstado"

import "../styles/CorInput.css"

const CorInput = ({ label, id, value }) => {
    const handleChange = useAtualizarEstado()

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            
            <div className="editor-cor__box">
                <input 
                    type="color"  
                    value={value}
                    onChange={handleChange}
                />
                
                <input 
                    type="text" 
                    id={id}
                    value={value} 
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default CorInput