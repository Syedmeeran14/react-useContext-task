import React from 'react'
import UserContextComponent from './utils/UserContextComponent'
import HomePage from './components/HomePage'

function App() {
  return <>
  <h1 style={{textAlign: 'center', fontFamily: 'serif'}}>Products</h1>
  <UserContextComponent><HomePage/></UserContextComponent>
  </>
}

export default App