function inputValidacaoModal() {

    function hundleSalvar(inputRef, setErro) {
        const valorInput = inputRef.current.value
    
        if (valorInput.trim() === "") {
            inputRef.current.style.border = "1px solid red"
            setErro("O campo está vazio, digite um nome para o preset.")
        }
    }

    return{
        hundleSalvar
    }
}

export default inputValidacaoModal