function atualizarEstado(e, setEstado) {
    const dataset = e.target.dataset.input

    if (dataset === "titulo") {
        setEstado((estado) => ({
            ...estado,

            titulo: e.target.value
        }))
    }

    if (dataset === "mensagem") {
        setEstado((estado) => ({
            ...estado,

            descricao: e.target.value
        }))
    }
    
    if (dataset === "cor-texto") {
        setEstado((estado) => ({
            ...estado,

            corTexto: e.target.value
        }))
    }

    if (dataset === "cor-fundo") {
        setEstado((estado) => ({
            ...estado,

            corFundo: e.target.value
        }))
    }

    if (dataset === "tamanho-fonte") {
        setEstado((estado) => ({
            ...estado,

            tamanhoFonte: e.target.value
        }))
    }

    if (dataset === "peso-fonte") {
        setEstado((estado) => ({
            ...estado,

            pesoFonte: e.target.value
        }))
    }

    if (dataset === "espacamento") {
        setEstado((estado) => ({
            ...estado,

            espacamento: e.target.value
        }))
    }

    if (dataset === "raio-borda") {
        setEstado((estado) => ({
            ...estado,

            raioBorda: e.target.value
        }))
    }

    if (dataset === "borda") {
        setEstado((estado) => ({
            ...estado,

            borda: e.target.value
        }))
    }
}

export default atualizarEstado