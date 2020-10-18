import React, { useContext } from "react"
import AlertContext from "../utils/contexts/AlertContext"

const Alert: React.FC<{}> = () => {
  const alertContext = useContext(AlertContext)

  return (
    <>
      {alertContext.hasAlert() && (
        <div className={`notification ${alertContext.getAlert().type}`}>
          <p className="has-text-weight-semibold">
            {alertContext.getAlert().message}
          </p>
        </div>
      )}
    </>
  )
}

export default Alert
