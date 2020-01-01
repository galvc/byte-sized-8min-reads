import React from "react"
import Header from "../components/header"

export default ({ children }) => (
  <div className="container w-8/12 px-4">
    <Header />
    {children}
  </div>
)