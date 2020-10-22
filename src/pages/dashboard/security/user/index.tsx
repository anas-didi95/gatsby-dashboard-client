import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import Alert from "../../../../components/Alert"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import Panel from "../../../../components/Panel"
import Table from "../../../../components/Table"
import AppLayout from "../../../../layouts/AppLayout"
import AuthContext from "../../../../utils/contexts/AuthContext"

const SecurityUserListPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <Alert />
            <UserListTable />
            <br />
            <ActionButton />
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const UserListTable: React.FC<{}> = () => {
  type TUser = {
    id: string
    username: string
    fullName: string
    version: number
  }
  const [userList, setUserList] = useState<TUser[]>([])
  const authContext = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        `${process.env.GATSBY_API_SECURITY}/graphql`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authContext.getAccessToken()}`,
          },
          body: JSON.stringify({
            query: `
            query {
              getUserList {
                id
                username
                fullName
                version
              }
            }
          `,
            variables: null,
          }),
        }
      )
      const responseBody = await response.json()
      setUserList(responseBody.data.getUserList)
    })()
  }, [])

  return (
    <Panel title="User Listing" color="is-link">
      <Table headers={["No", "Username", "Full Name"]} widths={[10, 40, 50]}>
        {userList.length > 0 &&
          userList.map((user, i) => (
            <tr key={`${user.id}`}>
              <td>{i + 1}</td>
              <td>{user.username}</td>
              <td>{user.fullName}</td>
            </tr>
          ))}
      </Table>
    </Panel>
  )
}

const ActionButton: React.FC<{}> = () => (
  <ButtonGroup align="right">
    <Link to="/dashboard/security/user/add" className="button is-primary">
      Add
    </Link>
  </ButtonGroup>
)

export default SecurityUserListPage
