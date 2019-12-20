import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"

export default ({ children }) => (
  <div class="container px-4">
    <Header />
    {/* <Menu /> */}
    {children}
  </div>
)