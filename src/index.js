import React from "react"
import ReactDOM from "react-dom"
import Concerts from "./Concerts"
import "./styles.scss"

function App() {
  return (
    <div className="App">
      <h1 className="headline big">Waving The Guns</h1>
      <Concerts />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
