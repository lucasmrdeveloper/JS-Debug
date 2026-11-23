// Hook
import { useContext } from 'react'

// Componentes
import Header from '../components/Header/Header'
import Presets from '../features/presets/components/Presets'
import Inputs from '../features/editor/components/Inputs'
import ColunaDireitaBox from '../components/Colunas/ColunaDireita/ColunaDireitaBox'

import Notificacao from '../components/Notificacao/Notificacao'

// CSS
import "./styles/reset.css"
import "./styles/base.css"
import "./styles/colunas.css"

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
