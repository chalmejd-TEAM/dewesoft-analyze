import { useState } from 'react'
import './App.css'
import PlotWindow from './PlotWindow'
import FileExponentSelector from './FileSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Dewesoft Analyze</h1>
      <div className="card">
        <FileExponentSelector className='FXS'></FileExponentSelector>
      </div>
    </>
  )
}

export default App
