import React, {useEffect,useState} from "react"

function App()
{
  const [backendData, setBackendData] = useState([{}])

  useEffect( () => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
    <div>
      {backendData && <h1>Name: {backendData.name}</h1>}
    </div>
  );
}

export default App