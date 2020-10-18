import React, { useEffect } from "react"
import AppLayout from "../../layouts/AppLayout"

const MainPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Main" needAuth={true} location={location}>
    <section className="section">
      <article className="container">
        <div>Dashboard</div>
      </article>
    </section>
  </AppLayout>
)

export default MainPage
