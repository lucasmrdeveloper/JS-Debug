// Hook
import { useContext } from 'react'

// Componentes
import Header from '../layouts/Header/Header'
import Presets from '../features/presets/components/Presets'
import Editor from '../features/editor/components/Editor'
import ColunaDireita from '../layouts/ColunaDireita/ColunaDireita'

import Notificacao from '../layouts/Notificacao/Notificacao'

// CSS
import "./styles/reset.css"
import "./styles/base.css"
import "./styles/App.css"

// Contexto
import { NotificacaoContext } from '../context/NotificacaoContext'


function App() {
  const { notificacao } = useContext(NotificacaoContext)

  return (
    <>
      {notificacao && (<Notificacao texto={notificacao}/>)}
      
      <Header />
      <Presets />

      <div className="colunas">
          <Editor />
          <ColunaDireita />
      </div>
    </>
  )
}

export default App
