// Hook
import { useContext } from 'react'

// Componentes
import Header from '../components/Header/Header'
import Presets from '../components/Presets/PresetsBox'
import Inputs from '../features/editor/components/Inputs'
import ColunaDireitaBox from '../components/Colunas/ColunaDireita/ColunaDireitaBox'

import Notificacao from '../components/Notificacao/Notificacao'

// CSS
import "./styles/base/reset.css"
import "./styles/base/base.css"
import "./styles/layout/responsivo.css"


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
          <Inputs />
          <ColunaDireitaBox />
      </div>
    </>
  )
}

export default App
