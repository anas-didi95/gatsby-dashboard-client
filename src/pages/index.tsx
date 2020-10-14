import React from "react"
import Box from "../components/Box"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"
import Form from "../components/Form"
import FormField from "../components/FormField"

const IndexPage: React.FC<{}> = () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroA"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
              <a className="navbar-item">Examples</a>
              <a className="navbar-item">Documentation</a>
              <span className="navbar-item">
                <a className="button is-primary is-inverted">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <LoginForm />
    </div>
  </section>
)

const LoginForm: React.FC<{}> = () => (
  <section className="container">
    <div className="columns">
      <div className="column" />
      <article className="column is-6">
        <Box>
          <Form title="Login Form">
            <FormField label="Username" type="text" error="" />
            <FormField label="Password" type="password" error="" />
            <ButtonGroup align="right">
              <Button type="submit" color="primary" label="Login" />
            </ButtonGroup>
          </Form>
        </Box>
      </article>
      <div className="column" />
    </div>
  </section>
)

export default IndexPage
