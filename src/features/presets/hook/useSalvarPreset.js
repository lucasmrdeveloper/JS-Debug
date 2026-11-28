import { useContext } from "react"
import { useGerarCodigo } from "../../../shared/hooks/useGerarCodigo"

import notificacao from "./notificacao"

import { EstadoContext } from "../../../context/EstadoContext"
import { PresetContext } from "../../../context/PresetContext"

export const useSalvarPreset = () => {
    const { estado } = useContext(EstadoContext)
    const { setPreset } = useContext(PresetContext)

    const codigoGerado = useGerarCodigo()
    const notificar = notificacao()

    return (nomePreset) => {
        const novoPreset = {
            nomePreset,
            ...estado,
            id: crypto.randomUUID(),
            codigoGerado: codigoGerado
        }

        setPreset(preset => [...preset, novoPreset])
        notificar("Preset salvo com sucesso!")
    }
}