import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // way to access env variables in app made using vite
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>To DO App Using appwrite</h1>
      <textarea></textarea>
      <button>Add</button>
    </>
  )
}

export default App
