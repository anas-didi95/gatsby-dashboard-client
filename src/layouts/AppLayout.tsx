import React, { ReactNode } from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import useSiteMetadata from "../utils/hooks/useMetadataQuery"

interface IAppLayout {
  children: ReactNode
  title: string
}

const AppLayout: React.FC<IAppLayout> = ({ children, title }) => {
  const metadata = useSiteMetadata()

  return (
    <>
      <SEO
        title={title}
        description={metadata.description}
        siteTitle={metadata.title}
      />
      <a className="skip-link" href="#mainContent">
        Skip to main
      </a>
      <header>
        <Navbar title={metadata.title} icon={metadata.icon} />
      </header>
      <main id="mainContent">{children}</main>
    </>
  )
}

export default AppLayout
