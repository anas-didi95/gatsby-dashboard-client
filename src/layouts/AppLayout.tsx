import { navigate } from "gatsby"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import AlertContext, {
  TAlertType,
  TAlert,
} from "../utils/contexts/AlertContext"
import AuthContext from "../utils/contexts/AuthContext"
import LoadingContext from "../utils/contexts/LoadingContext"
import useSiteMetadata from "../utils/hooks/useMetadataQuery"

interface IAppLayout {
  children: ReactNode
  title: string
  needAuth?: boolean
  location: {
    state: {
      alert?: {
        message: string
        type: TAlertType
      }
    }
  }
}

const AppLayout: React.FC<IAppLayout> = ({
  children,
  title,
  needAuth,
  location,
}) => {
  const metadata = useSiteMetadata()
  const [isShow, setShow] = useState<boolean>(false)
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const loadingContext = useContext(LoadingContext)

  useEffect(() => {
    if (needAuth && !authContext.isAuth()) {
      const alert: TAlert = {
        message: "Unauthorized! Please login to continue.",
        type: "is-danger",
      }
      navigate("/", { state: { alert } })
    } else {
      setShow(true)
    }
  }, [])

  useEffect(() => {
    if (!!location.state?.alert) {
      const { alert } = location.state
      if (!!alert) {
        alertContext.setAlert(alert.message, alert.type)
      }
    }

    loadingContext.offLoading()

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
