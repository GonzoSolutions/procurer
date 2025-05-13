//
// App.tsx
//

import React from 'react'

//
//

import Logo from '/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="Vite logo" />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
