import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  )
}

export default Layout
