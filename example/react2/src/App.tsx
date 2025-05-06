import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Welcome } from "./components/welcome"


import HomePage from "./components/HomePage"
import SecondPage from "./components/SecondPage"

function App() {
  return (
    // React Fragment, 常用于包裹多个元素
    <>
      <Welcome />
    </>
  )
}

export default App
