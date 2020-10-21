import React from "react"
import Breadcrumb from "../../../../components/Breadcrumb"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"

const SecurityUserListPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User List"]} />
            <br />
            <UserListTable />
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const UserListTable: React.FC<{}> = () => (
  <Panel title="User Listing" color="is-link">
    <div className="table-container">
      <table className="table is-striped is-bordered is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>No</th>
            <th style={{ width: "40%" }}>Username</th>
            <th style={{ width: "50%" }}>Full Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Username</td>
            <td>Fullname</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Username</td>
            <td>Fullname</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Panel>
)

export default SecurityUserListPage;
