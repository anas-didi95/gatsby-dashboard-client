import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import Alert from "../../../../components/Alert"
import Box from "../../../../components/Box"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import LabelValue from "../../../../components/LabelValue"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"
import AlertContext from "../../../../utils/contexts/AlertContext"
import useSecurityService, {
  TUser,
} from "../../../../utils/hooks/useSecurityService"

const SecurityUserDetailPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - User Detail" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <Alert />
            <UserDetailPanel userId={location.state?.id ?? ""} />
            <br />
            <ActionButton />
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const UserDetailPanel: React.FC<{ userId: string }> = ({ userId }) => {
  const securityService = useSecurityService()
  const [user, setUser] = useState<TUser>({
    email: "-",
    fullName: "-",
    id: userId,
    password: "-",
    username: "-",
    version: 0,
  })
  const alertContext = useContext(AlertContext)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const responseBody = await securityService.getUserById(userId)
        setUser(responseBody)
        setLoading(false)
      } catch (e) {
        alertContext.setAlert(
          "Get user detail failed! Please refer console log for info",
          "is-danger"
        )
      }
    })()
  }, [])

  return (
    <Panel title="User Detail" color="is-link">
      <Box>
        <div className="columns is-multiline">
          <div className="column is-6">
            <LabelValue label="Username">{user.username}</LabelValue>
          </div>
          <div className="column is-6">
            <LabelValue label="Full Name">{user.fullName}</LabelValue>
          </div>
          <div className="column is-6">
            <LabelValue label="Email">{user.email}</LabelValue>
          </div>
          <div className="column is-6">
            <LabelValue label="Version">{user.version}</LabelValue>
          </div>
        </div>
        <hr />
        <ButtonGroup align="right">
          <Button
            label="Delete"
            type="button"
            color="is-danger"
            isOutlined
            isLoading={isLoading}
            onClick={() => console.log("noop")}
          />
          <Link
            to="/"
            className={`button is-primary ${isLoading ? "is-loading" : ""}`}
          >
            Edit
          </Link>
        </ButtonGroup>
      </Box>
    </Panel>
  )
}

const ActionButton: React.FC<{}> = () => (
  <ButtonGroup align="right">
    <Link to="/dashboard/security/user" className="button is-info">
      Back
    </Link>
  </ButtonGroup>
)

export default SecurityUserDetailPage
