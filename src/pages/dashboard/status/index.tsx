import React, { useEffect, useState } from "react"
import Box from "../../../components/Box"
import Breadcrumb from "../../../components/Breadcrumb"
import LabelValue from "../../../components/LabelValue"
import Panel from "../../../components/Panel"
import Tag from "../../../components/Tag"
import AppLayout from "../../../layouts/AppLayout"
import useConstants from "../../../utils/hooks/useConstants"

const StatusPage: React.FC<{ location: any }> = ({ location }) => {
  const constants = useConstants()
  type TData = {
    title: string
    url: string
  }
  const dataList: TData[] = [
    { title: "Security", url: constants.getApiSecurity() },
    { title: "Bot", url: constants.getApiBot() },
    { title: "Budget", url: "https://api.anasdidi.dev/budget" },
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
              <div className="columns is-multiline is-centered">
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
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    ; (async () => {
      try {
        const response = await fetch(`${url}/ping`)
        const responseBody = await response.json()
        setContent(JSON.stringify(responseBody).replace("[", "[\n\t").replace("]", "\n]"))
        setOutcome(responseBody.outcome)
      } catch (e) {
        console.log(e)
        setOutcome("DOWN")
      }
    })()
  }, [])

  return (
    <Panel title={title} color="is-link">
      <Box>
        <div className="columns">
          <div className="column is-8">
            <LabelValue label="URL">{url}</LabelValue>
          </div>
          <div className="column is-4">
            <LabelValue label="Status">
              {outcome === "UP" ? (
                <Tag value="Online" color="is-success" />
              ) : outcome === "DOWN" ? (
                <Tag value="Offline" color="is-danger" />
              ) : (
                    <Tag value="Checking" color="is-warning" />
                  )}
            </LabelValue>
          </div>
        </div>
        {content && <pre dangerouslySetInnerHTML={{ __html: content }} />}
      </Box>
    </Panel>
  )
}

export default StatusPage
