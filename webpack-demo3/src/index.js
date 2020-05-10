
import React from 'react'
import ReactDOM from 'react-dom'

class Text extends React.Component{

  render () {
    return <div>webpack Text</div>
  }

}

ReactDOM.render(
  <Text />,
  document.getElementById('root')
)