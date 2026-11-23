import { useAtualizarEstado } from "../../../shared/useAtualizarEstado"

const InputEditor = ({ label, id, value }) => {
    const handleChange = useAtualizarEstado()

    return (
        <div className="personalizar-item" style={{width: id === "espacamento" || id === "mensagem" ? "100%" : "auto"}}>
            <label htmlFor={id}>{label}</label>
            
            <input 
                type="text"
                id={id}
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default InputEditor