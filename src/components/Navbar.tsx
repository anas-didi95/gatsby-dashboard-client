import { Link, navigate } from "gatsby"
import GatsbyImage, { FixedObject } from "gatsby-image"
import React, { useContext, useState } from "react"
import AuthContext from "../utils/contexts/AuthContext"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"

interface INavbar {
  title: string
  icon: FixedObject
}

const Navbar: React.FC<INavbar> = ({ title, icon }) => {
  const [isActive, setActive] = useState<boolean>(false)

  const toggleActive = () => setActive((prev) => !prev)

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
      style={{ padding: "0.5rem" }}
    >
      <div className="container">
        <NavbarBrand
          toggleActive={toggleActive}
          isActive={isActive}
          title={title}
          icon={icon}
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
  <div className="navbar-brand mr-4">
    <Link to="/dashboard" className="navbar-item">
      <GatsbyImage fixed={icon} />
      <p className="title ml-2 is-4 has-text-white">{title}</p>
    </Link>
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

const NavbarMenu: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const authContext = useContext(AuthContext)

  const logOut = () => {
    authContext.logOut()
    navigate("/")
  }

  return (
    <div className={`navbar-menu ${!!isActive ? "is-active" : ""}`}>
      {authContext.isAuth() && (
        <div className="navbar-start">
          <Link to="/dashboard/status" className="navbar-item">
            Status
          </Link>
        </div>
      )}
      <div className="navbar-end">
        <div className="navbar-item">
          <ButtonGroup align="right">
            <Button
              type="button"
              color="info"
              label="Credits"
              isInverted
              isOutlined
              onClick={() => {
                console.warn("noop")
                navigate("/dashboard/error404")
              }}
            />
            {authContext.isAuth() && (
              <Button
                type="button"
                color="primary"
                label="Log Out"
                onClick={logOut}
              />
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default Navbar
