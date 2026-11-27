import { useSalvarPreset } from "./useSalvarPreset"

export const useHandleSalvar = () => {
    const salvarPreset = useSalvarPreset()

    return (inputRef, setErro, fechar) => {
        const nomePreset = inputRef.current.value.trim()

        if (!nomePreset) {
            setErro("O campo está vazio, digite um nome para o preset.")
            return
        }
    
        salvarPreset(nomePreset)
        fechar()
    }
}