// Hook
import { useContext } from 'react'

// Componentes
import Header from './components/Header/Header'
import Presets from './components/Presets/PresetsBox'
import Colunas from "./components/Colunas/Colunas"
import Notificacao from './components/Notificacao/Notificacao'

// CSS
import "./styles/base/reset.css"
import "./styles/base/base.css"
import "./styles/layout/responsivo.css"

// Contexto
import { NotificacaoContext } from './context/NotificacaoContext'


function App() {
  const { notificacao } = useContext(NotificacaoContext)

  return (
    <>
      {notificacao && (<Notificacao texto={notificacao}/>)}
      
      <Header />
      <Presets />
      <Colunas />
    </>
  )
}

export default App
