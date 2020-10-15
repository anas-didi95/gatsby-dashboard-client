import GatsbyImage, { FixedObject } from "gatsby-image"
import React, { useState } from "react"
import useMetadataQuery from "../utils/hooks/useMetadataQuery"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"

const Navbar: React.FC<{}> = () => {
  const metadata = useMetadataQuery()
  const [isActive, setActive] = useState<boolean>(false)

  const handler = {
    toggleActive: () => setActive((prev) => !prev),
  }

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <NavbarBrand
          toggleActive={handler.toggleActive}
          isActive={isActive}
          title={metadata.title}
          icon={metadata.icon}
        />
        <NavbarMenu isActive={isActive} />
      </div>
    </nav>
  )
}

const NavbarBrand: React.FC<{
  toggleActive: () => void
  isActive: boolean
  title: string
  icon: FixedObject
}> = ({ toggleActive, isActive, title, icon }) => (
  <div className="navbar-brand">
    <a href="/" className="navbar-item">
      <GatsbyImage fixed={icon} />
      <p className="title ml-2 is-4 has-text-white">{title}</p>
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
