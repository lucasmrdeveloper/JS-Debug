function copiarCodigo() {

    function copiar(item, setCopy, index) {
        console.log("item", item)

        setCopy(index)

        navigator.clipboard.writeText(item.codigoGerado)
            .then(() =>console.log("texto Copiado"))

        setTimeout(() => {
            setCopy(null)
        }, 2000)
    }

    return {
        copiar
    }
}

export default copiarCodigo