import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button";
import ComponentA from "./ComponenteA";
import ComponentB from "./ComponenteB";
import './App.css';

const element = 'Digital Inovation One'
const element2 = <h1> Olá turminha do bem  =D</h1>

function soma(a, b) {
  alert (a + b)  
}

const App = () => {
  return (
    <div>
      Olá
      <Button onClick={()=>soma(15,12)} name="Ícaro Siqueira" />
      <ComponentA>
        <ComponentB>
          <Button onClick={()=>soma(5,11)} name="José das Couves" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

export default App

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
