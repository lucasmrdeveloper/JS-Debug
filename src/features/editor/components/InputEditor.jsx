import { useAtualizarEstado } from "../../../shared/useAtualizarEstado"

const InputEditor = ({ label, id, value }) => {
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

export default InputEditor