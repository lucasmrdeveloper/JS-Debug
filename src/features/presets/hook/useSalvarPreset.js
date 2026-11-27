import { useContext } from "react";

import { EstadoContext } from "../../../context/EstadoContext"
import { PresetContext } from "../../../context/PresetContext"

import modalController from "./modalController";
import notificacao from "./notificacao";
import { useGerarCodigo } from "../../../shared/hooks/useGerarCodigo";

export const useSalvarPreset = () => {
    const { estado } = useContext(EstadoContext)
    const { setPreset } = useContext(PresetContext)
    const { gerarNotificacao } = notificacao()
    const codigoGerado = useGerarCodigo()

    return (nomePreset) => {
        const novoPreset = {
            nomePreset,
            ...estado,
            id: crypto.randomUUID(),
            codigoGerado: codigoGerado
        }

        setPreset(preset => [...preset, novoPreset])
        gerarNotificacao("Preset salvo com sucesso!")
    }
}