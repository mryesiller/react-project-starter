import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Header from "./header"
import Footer from "./footer"
import Main from "./main"

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout
