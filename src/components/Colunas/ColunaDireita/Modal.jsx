// Hooks
import { useRef, useState } from "react"

// Lógica
import modalController from "../../../hooks/modalController";
import validarInputModal from "../../../hooks/validarInputModal";

// CSS
import "../../../styles/layout/modal.css"

function Modal() {
    const [erro, setErro] = useState("")

    const { abrir, fechar, dialogRef } = modalController()
    const { hundleSalvar } = validarInputModal()


    const inputRef = useRef(null)

    return(
        <>
            <dialog className="preset-salvar" ref={dialogRef}>
                <h2 className="preset-salvar-titulo">Salvar Preset</h2>
                <p className="preset-salvar-texto">Salve o estilo para usar novamente depois.</p>

                <label htmlFor="preset-nome" >Nome do Preset</label>
                
                <input 
                    type="text" 
                    id="preset-nome" 
                    ref={inputRef} 
                    onChange={() => setErro("")}
                    style={{border: erro ? "1px solid red" : "1px solid #dedee3"}}
                ></input>

                {erro && <p className="preset-input-vazio">{erro}</p>}

                <div className="preset-salvar-btns">
                    <button className="preset-btn-cancelar" 
                        onClick={fechar}>Cancelar</button>

                    <button className="preset-btn-salvar"
                        onClick={() => hundleSalvar(inputRef, setErro, fechar)}>Salvar Preset</button>
                </div>
            </dialog>


            <button className="preset-btn-modal" onClick={abrir}>Salvar Preset</button>
        </>
    )
}

export default Modal
