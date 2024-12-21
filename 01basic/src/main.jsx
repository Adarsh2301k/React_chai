
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-dev-runtime.js'

function Chai(){
  return(
      <h3>Chai is Ready</h3>
  )
}


// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank',

//   },
//   children:'Click me to visit google'
// }


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>

)

const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click me to visit google'
)


createRoot(document.getElementById('root')).render(
  
    <App/>
 
)
