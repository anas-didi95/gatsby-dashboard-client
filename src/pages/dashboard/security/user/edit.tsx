import { Link } from "gatsby"
import React from "react"
import Box from "../../../../components/Box"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import Form from "../../../../components/Form"
import FormInput from "../../../../components/FormInput"
import LabelValue from "../../../../components/LabelValue"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"

const SecurityUserEditPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - Edit User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <EditForm />
          </div>
          <div className="column" />
        </div>
        Edit User - id: {location.state?.id ?? "empty"}
      </article>
    </section>
  </AppLayout>
)

const EditForm: React.FC<{}> = () => {
  return (
    <Panel title="Edit User" color="is-link">
      <Box>
        <Form onSubmit={() => console.log("noop")}>
          <div className="columns is-multiline">
            <div className="column is-6">
              <LabelValue label="Username">Username</LabelValue>
            </div>
            <div className="column is-6">
              <LabelValue label="Password">****</LabelValue>
            </div>
            <div className="column is-6">
              <FormInput
                label="Username"
                name="username"
                error=""
                type="text"
              />
            </div>
            <div className="column is-6">
              <FormInput
                label="Username"
                name="username"
                error=""
                type="text"
              />
            </div>
          </div>
          <hr />
          <ButtonGroup align="right">
            <Button
              label="Back"
              color="is-danger"
              isOutlined
              type="submit"
              onClick={() => console.log("noop")}
            />
            <Button
              label="Update"
              color="is-primary"
              type="submit"
              onClick={() => console.log("noop")}
            />
          </ButtonGroup>
        </Form>
      </Box>
    </Panel>
  )
}

export default SecurityUserEditPage
