import React, { ReactNode } from "react"
import Navbar from "../components/Navbar"

interface IAppLayout {
  children: ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <a className="skip-link" href="#mainContent">
        Skip to main
      </a>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
