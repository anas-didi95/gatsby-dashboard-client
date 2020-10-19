import React, { useEffect, useState } from "react"
import Box from "../../../components/Box"
import Breadcrumb from "../../../components/Breadcrumb"
import FormInput from "../../../components/FormInput"
import AppLayout from "../../../layouts/AppLayout"

const StatusPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Status" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Status"]} />
            <br />
            <div className="columns is-multiline">
              <div className="column is-6">
                <StatusPanel />
              </div>
              <div className="column is-6">
                <StatusPanel />
              </div>
              <div className="column is-6">
                <StatusPanel />
              </div>
            </div>
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const StatusPanel: React.FC<{}> = () => {
  const [security, setSecurity] = useState<string>("")
  const [bot, setBot] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${process.env.GATSBY_API_SECURITY}/ping`)
        const responseBody = await response.json()
        console.log(responseBody)
        setSecurity(responseBody.outcome)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <div className="panel is-link">
      <p className="panel-heading">Security</p>
      <Box>
        <div className="columns">
          <div className="column is-8">
            <div className="field">
              <label className="label">URL</label>
              <div className="control">
                <p>{process.env.GATSBY_API_SECURITY}</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <p>
                  {security === "UP" ? (
                    <span className="tag is-success is-rounded has-text-weight-semibold">
                      Online
                    </span>
                  ) : security === "DOWN" ? (
                    <span className="tag is-danger is-rounded has-text-weight-semibold">
                      Offline
                    </span>
                  ) : (
                    <span className="tag is-warning is-rounded has-text-weight-semibold">
                      Checking
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default StatusPage
