import React from "react"
import Box from "../components/Box"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Navbar from "../components/Navbar"

const IndexPage: React.FC<{}> = () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-head">
      <Navbar />
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
