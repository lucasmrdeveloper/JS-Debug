import { useSalvarPreset } from "../../../hooks/useSalvarPreset"

const useHandleSalvar = () => {
    const salvarPreset = useSalvarPreset()

    return (inputRef, setErro) => {
        const nomePreset = inputRef.current.value.trim()

        if (!nomePreset) {
            setErro("O campo está vazio, digite um nome para o preset.")
        }
    
        salvarPreset(nomePreset)
    }
}

export default useHandleSalvar