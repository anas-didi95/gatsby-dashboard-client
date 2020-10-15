import React, { useState } from "react"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"

const Navbar: React.FC<{}> = () => {
  const [isActive, setActive] = useState<boolean>(false)

  const handler = {
    toggleActive: () => setActive((prev) => !prev),
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <NavbarBrand toggleActive={handler.toggleActive} isActive={isActive} />
        <NavbarMenu isActive={isActive} />
      </div>
    </nav>
  )
}

const NavbarBrand: React.FC<{
  toggleActive: () => void
  isActive: boolean
}> = ({ toggleActive, isActive }) => (
  <div className="navbar-brand">
    <a href="/" className="navbar-item">
      <p className="title">Dashboard</p>
    </a>
    <span
      className={`navbar-burger burger ${!!isActive ? "is-active" : ""}`}
      onClick={toggleActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
)

const NavbarMenu: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className={`navbar-menu ${!!isActive ? "is-active" : ""}`}>
    <div className="navbar-end">
      <div className="navbar-item">
        <ButtonGroup align="right">
          <Button
            type="button"
            color="info"
            label="Credits"
            isInverted
            isOutlined
          />
          <Button type="button" color="primary" label="Log Out" />
        </ButtonGroup>
      </div>
    </div>
  </div>
)

export default Navbar
