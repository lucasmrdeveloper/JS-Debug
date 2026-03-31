// Hooks
import { useRef, useState } from "react"

// Lógica
import modalController from "../../../hooks/modalController";
import validarInputModal from "../../../hooks/validarInputModal";
import salvarPreset from "../../../hooks/salvarPreset";

// CSS
import "../../../styles/layout/modal.css"

function Modal() {
    const [erro, setErro] = useState("")

    const { abrirModal, fecharModal } = modalController()
    const { hundleSalvar } = validarInputModal()

    const { salvar } = salvarPreset()

    const dialogRef = useRef(null)
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
                        onClick={() => fecharModal(dialogRef, inputRef)}>Cancelar</button>

                    <button className="preset-btn-salvar"
                        onClick={() => salvar(inputRef, dialogRef, hundleSalvar(inputRef, setErro))}>Salvar Preset</button>
                </div>
            </dialog>


            <button className="preset-btn-modal" onClick={() => abrirModal(dialogRef)}>Salvar Preset</button>
        </>
    )
}

export default Modal
