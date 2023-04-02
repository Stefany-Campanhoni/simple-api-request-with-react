import { useState, useEffect } from "react"
import "./App.css"
import { getAllUsers } from "./Api"

function App() {
  const [users, setUsers] = useState([])

  async function initApi() {
    const allUsers = await getAllUsers()

    setUsers(allUsers)
  }

  useEffect(() => {
    initApi()
  }, [])

  return (
    <div className="App">
      {users.map((data) => {
        return (
          <h2 key={data.id}>
            {data.name} | {data.email}
          </h2>
        )
      })}
    </div>
  )
}

export default App
