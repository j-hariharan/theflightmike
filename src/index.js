import React from 'react'
import ReactDOM from 'react-dom'
import Document from './components/document.js'

let path = window.location.pathname
let current

switch (path) {
    case "/":   current = "home"
                break

    case "/watch":  current = "watch"
                    break

    case "/merch":  current = "merch"
                    break

    default: current = "home"
}


ReactDOM.render (
    <Document current = {current}/>,
    document.getElementById('root')
)