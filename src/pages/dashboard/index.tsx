import React from "react"
import AppLayout from "../../layouts/AppLayout"

const MainPage: React.FC<{}> = () => (
  <AppLayout title="Main" needAuth={true}>
    <section className="section">
      <article className="container">
        <div>Dashboard</div>
      </article>
    </section>
  </AppLayout>
)

export default MainPage
