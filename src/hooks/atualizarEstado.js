function atualizarEstado(e, estado, setEstado) {
    const dataset = e.target.dataset.input

    console.log("data", dataset)

    if (dataset === "titulo") {
        console.log("if: titulo")
        
        setEstado((estado) => ({
            ...estado,

            titulo: e.target.value
        }))
    }

    if (dataset === "mensagem") {
        console.log("if: mensagem")
        
        setEstado((estado) => ({
            ...estado,

            descricao: e.target.value
        }))
    }
    
    if (dataset === "cor-texto") {
        console.log("if: cor-texto")
        
        setEstado((estado) => ({
            ...estado,

            corTexto: e.target.value
        }))
    }

    if (dataset === "cor-fundo") {
        console.log("if: cor-fundo")
        
        setEstado((estado) => ({
            ...estado,

            corFundo: e.target.value
        }))
    }

    if (dataset === "tamanho-fonte") {
        console.log("if: tamanho-fonte")
        
        setEstado((estado) => ({
            ...estado,

            tamanhoFonte: e.target.value
        }))
    }

    if (dataset === "peso-fonte") {
        console.log("if: peso-fonte")
        
        setEstado((estado) => ({
            ...estado,

            pesoFonte: e.target.value
        }))
    }

    if (dataset === "espacamento") {
        console.log("if: espacamento")
        
        setEstado((estado) => ({
            ...estado,

            espacamento: e.target.value
        }))
    }

    if (dataset === "raio-borda") {
        console.log("if: raio-borda")
        
        setEstado((estado) => ({
            ...estado,

            raioBorda: e.target.value
        }))
    }

    if (dataset === "borda") {
        console.log("if: borda")
        
        setEstado((estado) => ({
            ...estado,

            borda: e.target.value
        }))
    }
}

export default atualizarEstado