function copiarCodigo() {
    function copiar(item, setCopy, index) {
        console.log("item", item)
        console.log("index", index)

        if (index != undefined) {
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