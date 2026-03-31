function modalController() {
    function abrirModal(dialogRef) {
        dialogRef.current.showModal()
    }

    function fecharModal(dialogRef, inputRef) {
        dialogRef.current.close()
        inputRef.current.value = ""
    }

    return{
        abrirModal,
        fecharModal
    }
}

export default modalController