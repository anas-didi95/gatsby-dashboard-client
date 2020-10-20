import { Link, navigate } from "gatsby"
import GatsbyImage, { FixedObject } from "gatsby-image"
import React, { useContext, useState } from "react"
import AuthContext from "../utils/contexts/AuthContext"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Modal from "./Modal"
import { GrGithub, GrLinkedin, GrPersonalComputer } from "react-icons/gr"
import useMetadataQuery from "../utils/hooks/useMetadataQuery"

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
  const [creditActive, setCreditActive] = useState<boolean>(false)

  const logOut = () => {
    authContext.logOut()
    navigate("/")
  }

  const toggleCreditActive = () => setCreditActive((prev) => !prev)

  return (
    <>
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
                label="Credit"
                isInverted
                isOutlined
                onClick={toggleCreditActive}
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
      <CreditModal isActive={creditActive} toggleActive={toggleCreditActive} />
    </>
  )
}

const CreditModal: React.FC<{
  isActive: boolean
  toggleActive: () => void
}> = ({ isActive, toggleActive }) => {
  const metadata = useMetadataQuery()

  return (
    <Modal title="Credit" isActive={isActive} toggleActive={toggleActive}>
      <div className="content">
        <h3>Resources</h3>
        <ul>
          <li>
            Gatsby starter{" "}
            <a href="https://www.gatsbyjs.org/starters/andykenward/gatsby-starter-default-typescript">
              gatsby-starter-default-typescript
            </a>{" "}
            by andykenward.
          </li>
          <li>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/prosymbols"
              title="Prosymbols"
            >
              Prosymbols
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </li>
          <li>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="columns is-centered has-text-centered is-mobile">
        <div className="column is-size-3">
          <a href={metadata.social.website} className="has-text-black">
            <GrPersonalComputer />
          </a>
        </div>
        <div className="column is-size-3">
          <a href={metadata.social.github} className="has-text-black">
            <GrGithub />
          </a>
        </div>
        <div className="column is-size-3">
          <a href={metadata.social.linkedin} className="has-text-black">
            <GrLinkedin />
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default Navbar
