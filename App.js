import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement("h1",{id:"heading"},"Namastey React 🚀 ") // returns an object
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root")) 

// this is also JS object. Like how React.createElement gives. 

//React component

//console.log(jsxHeading)

const HeadingComponent = ()=>{
    return <>
    <h1>Namastey React</h1>
        <p>Hello People</p>
    </>
}
const jsxHeading  =(
    <>
        <h1>Namastey React</h1>
        <p>Hello People</p>
        <HeadingComponent/>
    </>
)

console.log(HeadingComponent()) // it will console the log like React element 

root.render(jsxHeading) 