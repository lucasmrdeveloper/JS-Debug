import ItemPreset from "./ItemPreset"

import "./styles/Presets.css"

const presets = [
    {
        tipo: "Sucesso",
        descricao: "Log verde para sucesso",
        mensagem: "Sucesso: Código rodou",
        cor: "#16A34A"
    },
    {
        tipo: "Erro",
        descricao: "Log vermelho para erros",
        mensagem: "Erro:",
        cor: "#DC2626"
    },
    {
        tipo: "API",
        descricao: "Log azul para dados da API",
        mensagem: "API:",
        cor: "#0078D7"
    }
]

function Presets() {
    return(
        <div className="presets-box">
            <div className="presets-itens">
                {presets.map(({ tipo, descricao, mensagem, cor }) =>
                    <ItemPreset 
                        tipo = {tipo}
                        descricao = {descricao}
                        mensagem = {mensagem}
                        cor = {cor}
                    />
                )}
            </div>
        </div>
    )  
}

export default Presets