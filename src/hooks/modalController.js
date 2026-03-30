function modalController() {
    console.log("\n\n")
    console.log('%c ===== Abrir Modal ===== ', 'color: #00ff88; background: #1a1a2e; font-size: 14px;   font-weight: bold; padding: 8px 16px; border-radius: 4px');


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