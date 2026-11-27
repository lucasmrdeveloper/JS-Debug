import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import { useEffect, useState } from 'react'

import App from './App.jsx'
import MeusPresets from '../features/presets/pages/MeusPresets.jsx'
import Notificacao from '../layouts/Notificacao/Notificacao.jsx'

import { EstadoContext } from '../context/EstadoContext.jsx'
import { PresetContext } from '../context/PresetContext.jsx'
import { NotificacaoContext } from '../context/NotificacaoContext.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "meus-presets", element: <MeusPresets/> }
])

const Root = () => {
    const [preset, setPreset] = useState([])

    const [notificacao, setNotificacao] = useState(false)
    
    const [estado, setEstado] = useState({
      mensagem: "Debug: Verificando o código",
      corTexto: "#FFFFFF",
      corFundo: "#000000",
      tamanhoFonte: "16px",
      pesoFonte: "600",
      espacamento: "10px 10px",
      raioBorda: "5px",
      borda: "none",
      codigoGerado: ``
    })

    useEffect(() => {
      localStorage.setItem("presets", JSON.stringify(preset))
    }, [preset])

    return (
      <>
        <EstadoContext.Provider value={ {estado, setEstado} }>
          <PresetContext.Provider value={ {preset, setPreset} }>
            <NotificacaoContext.Provider value={ {notificacao, setNotificacao}}>
              <RouterProvider router={router}/>
            </NotificacaoContext.Provider>
          </PresetContext.Provider>
        </EstadoContext.Provider>

        {notificacao && (<Notificacao texto={notificacao}/>)}
      </>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
