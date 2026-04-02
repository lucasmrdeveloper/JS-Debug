import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'

import { useEffect } from 'react'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import App from './App.jsx'
import MeusPresets from './components/MeusPresets/MeusPresets.jsx'

import { useState } from 'react'
import { EstadoContext } from './context/EstadoContext.jsx'
import { PresetContext } from './context/PresetContext.jsx'
import { NotificacaoContext } from './context/NotificacaoContext.jsx'

import Notificacao from './components/Notificacao.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "meus-presets", element: <MeusPresets/> }
])

function Root() {
    const [preset, setPreset] = useState(() => {
      const data = localStorage.getItem("presets")

      return data ? JSON.parse(data) : []
    })

    const [notificacao, setNotificacao] = useState(false)
    
    const [estado, setEstado] = useState({
      mensagem: "Debug:",
      descricao: "Verificando código",
      corTexto: "#ffffff",
      corFundo: "#000000",
      tamanhoFonte: "16px",
      pesoFonte: "400",
      espacamento: "10px 10px",
      raioBorda: "5px",
      borda: "none",
      codigoGerado: ``
    })

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

    <Root />
 
)
