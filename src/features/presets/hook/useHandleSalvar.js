import salvarPreset from "../../../hooks/salvarPreset";

const useHandleSalvar = () => {
    const { salvar } = salvarPreset()

    return (inputRef, setErro, fechar) => {
        const nomePreset = inputRef.current.value.trim()

        if (!nomePreset) {
            setErro("O campo está vazio, digite um nome para o preset.")
        }
    
        salvar(nomePreset, fechar)
    }
}

export default useHandleSalvar