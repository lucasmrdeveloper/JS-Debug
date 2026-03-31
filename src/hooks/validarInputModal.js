import salvarPreset from "./salvarPreset";

function validarInputModal() {
    const { salvar } = salvarPreset()

    function hundleSalvar(inputRef, dialogRef, setErro) {
        const nomePreset = inputRef.current.value.trim()
    
        !nomePreset ? setErro("erro") : salvar(inputRef, dialogRef, nomePreset)
    }

    return{
        hundleSalvar
    }
}

export default validarInputModal