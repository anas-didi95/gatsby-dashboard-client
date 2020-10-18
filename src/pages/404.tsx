import { Link } from "gatsby"
import React from "react"
import Box from "../components/Box"
import AppLayout from "../layouts/AppLayout"

const Error404Page: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Error 404" location={location}>
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <ErrorMessage />
      </div>
    </section>
  </AppLayout>
)

const ErrorMessage: React.FC<{}> = () => (
  <article className="container">
    <div className="columns">
      <div className="column" />
      <div className="column is-5">
        <Box>
          <p className="title is-spaced is-3">Page Not Found!</p>
          <p className="subtitle is-5">
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <Link to="/dashboard" className="button is-primary">
            Return to Dashboard
          </Link>
        </Box>
      </div>
      <div className="column" />
    </div>
  </article>
)

export default Error404Page
