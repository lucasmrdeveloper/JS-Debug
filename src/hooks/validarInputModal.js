import salvarPreset from "./salvarPreset";

function validarInputModal() {
    const { salvar } = salvarPreset()

    function hundleSalvar(inputRef, dialogRef, setErro) {
        const nomePreset = inputRef.current.value.trim()
        const msgErro = "O campo está vazio, digite um nome para o preset."
    
        !nomePreset ? setErro(msgErro) : salvar(inputRef, dialogRef, nomePreset)
    }

    return{
        hundleSalvar
    }
}

export default validarInputModal