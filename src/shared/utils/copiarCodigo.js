export const copiarCodigo = async (codigoGerado) => {
    await navigator.clipboard.writeText(codigoGerado)
}