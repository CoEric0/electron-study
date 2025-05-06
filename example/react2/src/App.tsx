import { DefaultComponent } from "./components/hello"
import { Welcome } from "./components/welcome"

function App() {
  return (
    // React Fragment, 常用于包裹多个元素
    <>
      <Welcome />
      <DefaultComponent/>
    </>
  )
}

export default App
