import React from 'react'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
      <header>
        <nav>
          Navigagtion
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default AppLayout