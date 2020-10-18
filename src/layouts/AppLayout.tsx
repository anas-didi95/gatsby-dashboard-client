import { navigate } from "gatsby"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import AlertContext from "../utils/contexts/AlertContext"
import AuthContext from "../utils/contexts/AuthContext"
import useSiteMetadata from "../utils/hooks/useMetadataQuery"

interface IAppLayout {
  children: ReactNode
  title: string
  needAuth?: boolean
}

const AppLayout: React.FC<IAppLayout> = ({ children, title, needAuth }) => {
  const metadata = useSiteMetadata()
  const [isShow, setShow] = useState<boolean>(false)
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  useEffect(() => {
    if (needAuth && !authContext.isAuth()) {
      alertContext.setAlert(
        "Unauthorized! Please login to continue.",
        "is-danger"
      )
      navigate("/")
    } else {
      setShow(true)
    }

    return () => {
      alertContext.clearAlert()
    }
  }, [])

  return isShow ? (
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
  ) : null
}

export default AppLayout
