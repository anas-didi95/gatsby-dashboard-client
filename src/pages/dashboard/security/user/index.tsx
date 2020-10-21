import React from "react"
import Breadcrumb from "../../../../components/Breadcrumb"
import Panel from "../../../../components/Panel"
import Table from "../../../../components/Table"
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
    <Table
      headers={["No", "Username", "Full Name"]}
      widths={[10, 40, 50]}
    ></Table>
  </Panel>
)

export default SecurityUserListPage
