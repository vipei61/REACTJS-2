import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function exibirMensagem(){
    alert("curintia")
  }


  return (

    <>
    <button onClick={exibirMensagem}>Me odeio</button>
    <Button texto='Ver meu time' mensagem={exibir}/>
    </>

  )
}

export default App
