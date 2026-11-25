import { useAtualizarEstado } from "../hooks/useAtualizarEstado"

const TextoInput = ({ label, id, value }) => {
    const handleChange = useAtualizarEstado()

    return (
        <div className="personalizar-item">
            <label htmlFor={id}>{label}</label>
            
            <input 
                type="text"
                id={id}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextoInput