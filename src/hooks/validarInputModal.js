function validarInputModal() {

    function hundleSalvar(inputRef, setErro) {
        const valorInput = inputRef.current.value
    
        if (valorInput.trim() === "") {
            setErro("O campo está vazio, digite um nome para o preset.")
        }
    }

    return{
        hundleSalvar
    }
}

export default validarInputModal