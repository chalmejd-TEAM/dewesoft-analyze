import { useState } from 'react'
import './App.css'
import PlotWindow from './PlotWindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Dewesoft Analyze</h1>
      <div className="card">
        <h3>Select Analysis Type:</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Exponentially Weighted Mean
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Peak Finder
        </button>
      </div>
      <div>
        <PlotWindow className='PlotWindow'></PlotWindow>
      </div>
    </>
  )
}

export default App
