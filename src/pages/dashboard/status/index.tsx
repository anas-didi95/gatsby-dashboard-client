import React, { useEffect, useState } from "react"
import Box from "../../../components/Box"
import Breadcrumb from "../../../components/Breadcrumb"
import AppLayout from "../../../layouts/AppLayout"

const StatusPage: React.FC<{ location: any }> = ({ location }) => {
  type TData = {
    title: string
    url: string
  }
  const dataList: TData[] = [
    { title: "Security", url: process.env.GATSBY_API_SECURITY ?? "" },
    { title: "Bot", url: "https://api.anasdidi.dev/bot" },
    { title: "Bot2", url: "https://api.anasdidi.dev/bot" },
  ]

  return (
    <AppLayout title="Status" location={location} needAuth={true}>
      <section className="section">
        <article className="container">
          <div className="columns">
            <div className="column" />
            <div className="column is-10">
              <Breadcrumb paths={["Status"]} />
              <br />
              <div className="columns is-multiline">
                {dataList.map((data, i) => (
                  <div key={`data${i}`} className="column is-6">
                    <StatusPanel title={data.title} url={data.url} />
                  </div>
                ))}
              </div>
            </div>
            <div className="column" />
          </div>
        </article>
      </section>
    </AppLayout>
  )
}

const StatusPanel: React.FC<{ title: string; url: string }> = ({
  title,
  url,
}) => {
  const [outcome, setOutcome] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${url}/ping`)
        const responseBody = await response.json()
        setOutcome(responseBody.outcome)
      } catch (e) {
        console.log(e)
        setOutcome("DOWN")
      }
    })()
  }, [])

  return (
    <div className="panel is-link">
      <p className="panel-heading">{title}</p>
      <Box>
        <div className="columns">
          <div className="column is-8">
            <div className="field">
              <label className="label">URL</label>
              <div className="control">
                <p>{url}</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <p>
                  {outcome === "UP" ? (
                    <span className="tag is-success is-rounded has-text-weight-semibold">
                      Online
                    </span>
                  ) : outcome === "DOWN" ? (
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
