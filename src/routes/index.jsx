import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "../layout/Layout"
import { Home, Error404 } from "../pages"

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
