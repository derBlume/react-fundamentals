// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({
  size = 'medium',
  color = 'white',
  className,
  style,
  ...otherProps
}) {
  return (
    <div
      className={`${className} box box--${size}`}
      style={{...style, backgroundColor: color, fontStyle: 'italic'}}
      {...otherProps}
    ></div>
  )
}

function App() {
  return (
    <div>
      <Box
        id="best-box-ever"
        className="best-class-ever"
        size="small"
        color="lightblue"
      >
        Testbox1
      </Box>
      <Box size="medium" color="hotpink">
        Testbox2
      </Box>
      <Box size="large" color="orange" style={{fontSize: 'x-large'}}>
        Testbox3
      </Box>
    </div>
  )
}

export default App
