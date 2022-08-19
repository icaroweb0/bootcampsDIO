import React from "react"
import ReactDOM from "react-dom"
import './App.css';

function sum(a, b){
  return a + b
}

function primeiraJSX(){
  return (
    <div>
      Icaro Siqueira - Introdução ao ReactJS 
      <h1> Soma: {sum(20,50)}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="teste">
      {primeiraJSX()}
    </div>
  )
}

export default App

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
