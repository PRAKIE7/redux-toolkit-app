import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
      <h1 className="text-white">TODOS-Manager</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
