import React from 'react'
import ReactDOM from 'react-dom'

// App Component
class App extends React.Component {
  render() {
    return <h1>Hello, World!!</h1>
  }
}

// Render Component
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
