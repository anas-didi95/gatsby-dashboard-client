import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Box from "../components/Box"
import AppLayout from "../layouts/AppLayout"
import { Error404PageQuery } from "../../graphql-types"
import GatsbyImage, { FixedObject } from "gatsby-image"

const Error404Page: React.FC<{ location: any }> = ({ location }) => {
  const data: Error404PageQuery = useStaticQuery(graphql`
    query Error404Page {
      icon: file(relativePath: { eq: "warning.png" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppLayout title="Error 404" location={location}>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <ErrorMessage
            icon={data.icon?.childImageSharp?.fixed as FixedObject}
          />
        </div>
      </section>
    </AppLayout>
  )
}

const ErrorMessage: React.FC<{ icon: FixedObject }> = ({ icon }) => (
  <article className="container">
    <div className="columns">
      <div className="column" />
      <div className="column is-6">
        <Box>
          <div className="columns">
            <div className="column is-3 has-text-centered">
              <GatsbyImage fixed={icon} />
            </div>
            <div className="column">
              <p className="title">Page Not Found!</p>
              <p className="content mb-5">
                Looks like you've followed a broken link or entered a URL that
                doesn't exist on this site.
              </p>
              <Link to="/dashboard" className="button is-primary">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </Box>
      </div>
      <div className="column" />
    </div>
  </article>
)

export default Error404Page
