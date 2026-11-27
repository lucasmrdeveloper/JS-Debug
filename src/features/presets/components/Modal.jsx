import { useRef, useState } from "react"

import { useModalToggle } from "../hook/useModalToggle"
import useHandleSalvar from "../hook/useHandleSalvar"

import "../styles/modal.css"

const Modal = () => {
    const [erro, setErro] = useState("")
    const inputRef = useRef(null)

    const { abrir, fechar, dialogRef } = useModalToggle()
    const handleSalvar = useHandleSalvar()

    return (
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
                    <button 
                        className="preset-btn-cancelar" 
                        onClick={fechar}
                    >
                        Cancelar
                    </button>

                    <button 
                        className="preset-btn-salvar"
                        onClick={() => handleSalvar(inputRef, setErro)}
                    >
                        Salvar Preset
                    </button>
                </div>
            </dialog>

            <button 
                className="preset-btn-modal" 
                onClick={abrir}
            >
                Salvar Preset
            </button>
        </>
    )
}

export default Modal
