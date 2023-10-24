import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // way to access env variables in app made using vite
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
