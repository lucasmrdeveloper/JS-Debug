function copiarCodigo() {
    function copiar(item, setCopy, index) {
        if (index) {
            setCopy(index)
        }
        else {
            setCopy(true)
        }

        navigator.clipboard.writeText(item.codigoGerado)
            .then(() =>console.log("texto Copiado"))

        setTimeout(() => {
            setCopy(false)
        }, 3000)
    }

    return {
        copiar
    }
}

export default copiarCodigo