import salvarPreset from "./salvarPreset";

function validarInputModal() {
    const { salvar } = salvarPreset()

    function hundleSalvar(inputRef, dialogRef, setErro) {
        const nomePreset = inputRef.current.value.trim()
    
        if (!nomePreset) {
            setErro("O campo está vazio, digite um nome para o preset.")
        }
        else {
            salvar(inputRef, dialogRef, nomePreset)
        }
    }

    return{
        hundleSalvar
    }
}

export default validarInputModal