import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement("h1",{id:"heading"},"Namastey React 🚀 ") // returns an object
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root")) 

const jsxHeading  = <h1>Namastey React</h1> // this is also JS object. Like how React.createElement gives. 
console.log(jsxHeading)


root.render(jsxHeading) 