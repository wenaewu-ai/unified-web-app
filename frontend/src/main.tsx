import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState("Loading...")

  useEffect(() => {
    fetch('/api/hello') // 透過 Nginx 轉發，不需要寫死 port
      .then(res => res.json())
      .then(data => setMsg(data.message))
  }, [])

  return <h1>{msg}</h1>
}
export default App